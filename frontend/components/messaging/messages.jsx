import React from 'react'
import MessageListItem from './message_list_item'
import MessagePanelContainer from './message_panel_container'

export default class Messages extends React.Component{
    constructor(props){
        super(props)
        this.shown = false
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        if (!this.shown){
            e.currentTarget.lastElementChild.classList.add("shown")
            this.shown = true
        } else {
            e.currentTarget.lastElementChild.classList.remove("shown")
            this.shown = false
        }
    }

    render(){
        let notif = this.props.unread || ""
        return(
            <div className="messages" onClick={this.handleClick}>
                <img src="https://image.flaticon.com/icons/svg/130/130958.svg" alt=""/>
                <p>2</p> 
                <div className="message-dropdown">
                    <ul>
                        {this.props.friendships.map(friendship => <MessageListItem friendship={friendship} key={friendship.id}/> )}
                    </ul>
                </div>
                <MessagePanelContainer />
            </div>
        )
    }
}