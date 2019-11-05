import React from 'react'
import MessageItem from './message_item'
import MessageForm from './message_form'


export default class MessageIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
        this.bottom = React.createRef()
        this.top = React.createRef()
        this.page = 1
        this.handleClick = this.handleClick.bind(this)
        this.ready = true
    }   


    componentDidMount(){
        this.props.fetchMessages(this.props.friendship.room_id, 1).then(() => {
            this.bottom.current.scrollIntoView()
        })
    }


    componentDidUpdate(prevProps){
        if (this.props.friendship.id !== prevProps.friendship.id) {
            this.switchChat()
        } 
        if (this.props.messages.length === prevProps.messages.length + 1) {
            this.bottom.current.scrollIntoView()
        }
    }
/**
* Changes the displayed messages in the chat index to that of the current chat, and resets the page variable to 1.
* Similiar functionality to the componentDidMount
*/

    switchChat(){
        this.props.fetchMessages(this.props.friendship.room_id, 1)
        this.page = 1
        this.bottom.current.scrollIntoView()
    }

/**
* Requests more messages from the current chat 
*/
    handleClick(){
        this.page += 1
        this.props.fetchMessages(this.props.friendship.room_id, this.page)
        this.ready = false
        setTimeout(() => this.ready = true, 1000)
    }
/**
* Renders the chat box on the bottom of the page, the message of the current chat, and the form to create a new message
*/

    render(){
        
        if (!this.props.messages) return null
        return (
        <div className="message-index">
            <div className="message-friend-info">
               <img src={this.props.friendship.friend_img} alt="" />
                <p>{this.props.friendship.friend_name}</p>
                <button onClick={() => this.props.removeMessage()}>X</button>
            </div>
            <ul id="message-list">
                <button onClick={this.handleClick}>Fetch More Messages</button>
                {this.props.messages.map(message => <MessageItem key={message.id}message={message} 
                    currentUser={this.props.currentUser} 
                    friendship={this.props.friendship} /> )}
                <div ref={this.bottom} />
            </ul>      
            <MessageForm friendship={this.props.friendship} currentUser={this.props.currentUser} />
        </div>
        )
    }
}