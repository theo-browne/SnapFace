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
                App.cable.subscriptions.create(
                    { channel: `RoomChannel`, room_id: friendship.room_id },
                    // { channel: `RoomChannel_${friendship.room_id}`},
                    {
                        received: data => {
                            if (data.message.roomId === friendship.room_id) {
                                this.props.receiveMessage(data.message)
                                // setTimeout(this.props.updateUnread, 1000)
                                    this.props.updateUnread();
                            
                            }
                        }
                    }
                )
            })
        })
    }

    handleClick(e){
        // if (e.ta)
        if (!this.shown){
            // document.getElementById("message-drop-down").classList.add("shown")
            e.currentTarget.lastElementChild.classList.add("shown")
            this.shown = true
        } else {
            document.getElementById("message-drop-down").classList.remove("shown")

            // e.currentTarget.lastElementChild.classList.remove("shown")
            this.shown = false
        }
    }

    render(){
        let notif = this.props.unread || ""
        return(
            <div>
                <MessagePanelContainer />
            <div className="messages" onClick={this.handleClick}>
                <img src="https://image.flaticon.com/icons/svg/130/130958.svg" alt=""/>
                {/* <p>2</p>  */}
                <div className="message-dropdown" id="message-drop-down" >
                        <ul onClick={(e) => e.stopPropagation()}>
                        {this.props.friendships.map(friendship => <MessageListItem friendship={friendship} currentMessage={this.props.currentMessage} key={friendship.id}/> )}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}