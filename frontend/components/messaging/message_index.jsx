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
        this.handleScroll = this.handleScroll.bind(this)
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
            this.props.fetchMessages(this.props.friendship.room_id, 1)
            this.page = 1
            this.bottom.current.scrollIntoView()
        } 
        if (this.props.messages.length === prevProps.messages.length + 1) {
            this.bottom.current.scrollIntoView()
        }
    }

    handleScroll(e) {
        let lastEl = e.currentTarget.firstElementChild
        if (!lastEl) return null
        // console.log(this.top.scrollHeight)
        // if (e.currentTarget.scrollHeight  - e.currentTarget.scrollTop > e.currentTarget.offsetHeight && this.ready) {
        if (this.top.scrollTop < 5) {

            this.page += 1
            this.props.fetchMessages(this.props.friendship.room_id, this.page)
            this.ready = false
            setTimeout(() => this.ready = true, 1000)
        }
    }

    handleClick(){
        this.page += 1
        this.props.fetchMessages(this.props.friendship.room_id, this.page)
        this.ready = false
        setTimeout(() => this.ready = true, 1000)
    }


    render(){
        
        if (!this.props.messages) return null
        return (
        <div className="message-index">
                <div className="message-friend-info">
                   <img src={this.props.friendship.friend_img} alt="" />
                    <p>{this.props.friendship.friend_name}</p>
                    <button onClick={() => this.props.removeMessage()}>X</button>
                </div>
            <ul id="message-list" onScroll={this.handleScroll}>
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