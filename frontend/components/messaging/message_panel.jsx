import React from 'react'
import MessageIndex from './message_index'
import MessageForm from './message_form'
import MessageIndexContainer from './message_index_container'

export default class MessagePanel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if (!this.props.friendship) return null
        return(
            <div className="message-panel">
                <div className="message-panel-content">
                <MessageIndexContainer friendship={this.props.friendship} />
                {/* <MessageIndex friendship={this.props.friendship} messages={this.props.messages}fetchMessages={this.props.fetchMessages}/> */}
           
                </div>
            </div>
        )
    }
}