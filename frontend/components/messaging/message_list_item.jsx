import React from 'react'


export default class MessageListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="message-list-item">
                <img src={this.props.friendship.friend_img} alt=""/>
                <p>{this.props.friendship.friend_name}</p>
            </div>
        )
    }
}