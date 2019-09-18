import React from 'react'

export default class MessageItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let img = (this.props.message.userId === this.props.currentUser.id ) ? (
            <div className="user-message">

                <p>{this.props.message.content}</p>
                <img src={this.props.currentUser.profileUrl} alt="" />
            </div>
        ) : (
                <div className="friend-message">
                    <img src={this.props.friendship.friend_img} alt="" />
                    <p>{this.props.message.content}</p>
                   
            </div>
        )
        return(
            <div className="message-item">
    
                {img}
            </div>
        )
    }
}