import React from 'react'


export default class MessageListItem extends React.Component{
    constructor(props){
        super(props)
    }
/**
* Renders an item in the message dropdown
*/
    render(){
        return(
            <div className="message-list-item" onClick={() => this.props.currentMessage(this.props.friendship.friendId)}>
                <div className="message-list-item-img" >
                    <img src={this.props.friendship.friend_img} alt=""/>
                </div>
                <div className="message-list-item-text">
                    <p className="friend-name">{this.props.friendship.friend_name}</p>
                    <p className="last-message">{this.props.friendship.last_message}</p>
                </div>
            </div>
        )
    }
}