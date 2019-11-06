import React from 'react'
import MessageListItem from './message_list_item'
import MessagePanelContainer from './message_panel_container'

export default class Messages extends React.Component{
    constructor(props){
        super(props)
        this.shown = false
        this.handleClick = this.handleClick.bind(this)
    }


    componentDidMount(){
        this.props.fetchFriendships().then(() => {
            this.props.friendships.forEach(friendship => {
                this.createSubscription(friendship)
            })
        })
    }
    
/**
* Creates the subscription to each messaging channel the user is a part of.
* @param {friendship} friendship - The friendship object returned from the API. Chat room id is attached to friendship
*/
    createSubscription(friendship){
        App.cable.subscriptions.create(
                    { channel: `RoomChannel`, room_id: friendship.room_id },
                    {
                        received: data => {
                            if (data.message.roomId === friendship.room_id) {
                                this.props.receiveMessage(data.message)
                                    this.props.updateUnread();
                            }
                        }
                    }
                )
    }

/**
 * Toggles whether or not the users message icon and dropdown is shown
* @param {event} e - The submit event triggered by clicking the messages icon.
 */
    handleClick(e){
        if (!this.shown){
            e.currentTarget.lastElementChild.classList.add("shown")
            this.shown = true
        } else {
            document.getElementById("message-drop-down").classList.remove("shown")
            this.shown = false
        }
    }
/**
* Renders the message icon and dropdown
*/
    render(){
        return(
            <div>
                <MessagePanelContainer />
                <div className="messages" onClick={this.handleClick}>
                    <img src="https://image.flaticon.com/icons/svg/130/130958.svg" alt=""/>
                    <div className="message-dropdown" id="message-drop-down" >
                        <ul onClick={(e) => e.stopPropagation()}>
                            {this.props.friendships.sort((a, b) => (a.pos > b.pos) ? 1 : -1).map(friendship => 
                            <MessageListItem friendship={friendship} currentMessage={this.props.currentMessage}
                             key={friendship.id}/> )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}