import React from 'react'


export default class MessageForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: ""
        }
        this.sent = false
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
       let messageInput = document.querySelector("#message-input")
       this.submitListener(messageInput)
    }

/**
 * Adds an event listener on the textarea inside the message form which triggers the sendMessage function when 
 * the enter key is pressed
* @param {textarea} messageInput - The textarea inside the message form
 */

    submitListener(messageInput){
        messageInput.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                e.preventDefault()
                this.sendMessage()
            }
        })
    }

/**
* Sends a message to another user through Action Cable and removes the sent message from state and the form  
*/

    sendMessage(){
            App.cable.subscriptions.subscriptions[this.props.friendship.subscription].perform("speak",
                {
                    message: {
                        message: this.state.message, room_id: this.props.friendship.room_id,
                        user_id: this.props.currentUser.id
                    }
                })
            this.setState({ message: "" })
    }
/**
* Handles input on the Log in form
* @param {event} e - The change event triggered by a user typing in the textarea of the message form
*/

    handleChange(e){
        this.setState({message: e.target.value})
    }
/**
* Renders the message form
*/
    render(){
        return(
            <div className="message-form">
                <form action="" onSubmit={() => e.preventDefault()}>
                    <textarea value={this.state.message} id="message-input"placeholder="Write a Message..." 
                    onChange={this.handleChange} cols="30" rows="1">
                    </textarea>
                </form>
            </div>
        )
    }
}



