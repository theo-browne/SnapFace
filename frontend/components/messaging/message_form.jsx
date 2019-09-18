import React from 'react'


export default class MessageForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "",
            id: 2
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){

        // App.cable.subscriptions.create({ channel: "RoomChannel", room: 1 })
    }

    handleChange(e){
        this.setState({message: e.target.value})

        // if (!this.state.listen) {
        e.target.addEventListener('keypress', (e) => {
            // this.setState({listen: true})
            if (e.keyCode === 13) {
                e.preventDefault()
                App.room.speak(this.state)
                // this.setState({ message: "", listen: false })
                
            }
        }
        )
    // }

    }

    render(){
        return(
            <div>
                <form action="">
                    <input type="text" value={this.state.message} id="message-input" data-behavior="room-speaker" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}



