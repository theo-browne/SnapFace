import React from 'react'
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
                </div>
            </div>
        )
    }
}