import React from 'react'


export default class MessageForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "",
            id: 2
        }
        this.sent = false
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){

        // App.cable.subscriptions.create({ channel: "RoomChannel", room: 1 })
    }

    handleChange(e){
        this.setState({message: e.target.value})
        let that = this
        // if (!this.state.listen) {
        e.target.addEventListener('keypress', (e) => {
            // this.setState({listen: true})
            if (e.keyCode === 13) {
                e.preventDefault()
                if (!that.sent) {
                    that.sent = true
                App.cable.subscriptions.subscriptions[that.props.friendship.subscription].perform("speak", { message: { message: that.state.message, room_id: that.props.friendship.room_id, user_id: that.props.currentUser.id } })
                // App.room.speak(that.state)
                that.setState({ message: "" })
                setTimeout(() => that.sent = false, 1000)
                }
            }
        }
        )
    // }

    }

    render(){
        return(
            <div className="message-form">
                <form action="" onSubmit={() => e.preventDefault()}>
                    {/* <input type="text" value={this.state.message} id="message-input" data-behavior="room-speaker" onChange={this.handleChange}/> */}
                    <textarea value={this.state.message} placeholder="Write a Message..." onChange={this.handleChange} cols="30" rows="1"></textarea>
                    {/* <input type="text" value={this.state.message} placeholder="Write a Message..." onChange={this.handleChange}/> */}
                </form>
            </div>
        )
    }
}



