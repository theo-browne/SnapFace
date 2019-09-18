import React from 'react'
import MessageIndex from './message_index'
import MessageForm from './message_form'

export default class MessagePanel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if (!this.props.friendship) return null
        return(
            <div className="message-panel">
                <MessageIndex />
                <MessageForm />
            </div>
        )
    }
}