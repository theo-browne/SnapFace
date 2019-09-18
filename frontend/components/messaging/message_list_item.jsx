import React from 'react'


export default class MessageListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="message-list-item" onClick={() => this.props.currentMessage(this.props.friendship.friendId)}>
                <img src={this.props.friendship.friend_img} alt=""/>
                <div className="message-list-item-text">
                <p className="friend-name">{this.props.friendship.friend_name}</p>
                <p className="last-message">{this.props.friendship.last_message}</p>
                {/* <li className="last-message">{this.props.friendship.last_message}</li> */}
                </div>
            </div>
        )
    }
}