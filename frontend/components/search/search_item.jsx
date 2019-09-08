import React from 'react'



export default class SearchItem extends React.Component {
    constructor(props){
        super(props)
        
    }

    isFriend(){
       return this.props.friendIds.includes(this.props.user.id)
    }

    render(){
        let text = ""
        let action = ""
        if (this.isFriend() === false ) {
            text = "Add Friend"
            action = () => this.props.createFriendship({ status: "CONFIRMED", friend_id: this.props.user.id })
        } else {
            
            text = "Nah we ain't cool"
            action = console.log("I need to add a delete feature")
        } 

        return (
            <div>
                <li>{this.props.user.name}</li>
                <button onClick={action}>{text}</button>
            </div>
        )
    }
}


