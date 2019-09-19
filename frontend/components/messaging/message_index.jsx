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
        this.page = 1
        this.handleScroll = this.handleScroll.bind(this)
        this.ready = true
    }   
    componentDidMount(){
        this.props.fetchMessages(this.props.friendship.room_id, 1).then(() => {
            this.bottom.current.scrollIntoView()
        })
        // document.querySelector("#message-list").addEventListener('scroll', this.handleScroll)
    }
    componentDidUpdate(prevProps){
        if (this.props.friendship.id !== prevProps.friendship.id) {
            this.props.fetchMessages(this.props.friendship.room_id, 1)
            this.page = 1
        } 
                    // this.bottom.current.scrollIntoView()

        
    }

    handleScroll(e) {
        let lastEl = e.currentTarget.firstElementChild
        // const ul = document.querySelector(".news-feed")
        // console.log(e.currentTarget.scrollTop)
        // console.log(e.currentTarget.scrollHeight)
        // console.log(e.currentTarget.clientHeight)
        // console.log(lastEl.offsetTop)
        // console.log(pageYOffset)
        // console.log(e.currentTarget.scrollY)
        // console.log(e.currentTarget.scrollHeight)
        // console.log(e.currentTarget.scrollTop)
        // console.log(e.currentTarget.scrollHeight - e.currentTarget.scrollTop)
        // console.log(lastEl.scrollHeight)
        // console.log(lastEl.offsetHeight)
        // console.log(e.currentTarget.offsetHeight)
        if (!lastEl) return null
        if (e.currentTarget.scrollHeight  - e.currentTarget.scrollTop > e.currentTarget.offsetHeight && this.ready) {
            // console.log('success')
            this.page += 1
            this.props.fetchMessages(this.props.friendship.room_id, this.page)
            // this.props.fetchPosts(this.page)
            this.ready = false
            setTimeout(() => this.ready = true, 1000)
        }
        // if (this.page > this.props.maxPages) {
        //     window.removeEventListener('scroll', this.handleScroll)
        // }
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
                {this.props.messages.map(message => <MessageItem key={message.id}message={message} currentUser={this.props.currentUser} friendship={this.props.friendship} /> )}
                
                    {/* <h1>{this.props.friendship.friend_name}</h1> */}
                    <div ref={this.bottom} />
            </ul>
                
                <MessageForm friendship={this.props.friendship} currentUser={this.props.currentUser} />

        </div>
        )
    }
}