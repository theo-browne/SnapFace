import React from 'react'
import {Link} from 'react-router-dom'


export default class SearchItem extends React.Component {
    constructor(props){
        super(props)
        
    }

    isFriend(){
       return Object.keys(this.props.friends).includes(String(this.props.user.id))
    }

    render(){
        let text = ""
        let action = ""
        if (this.isFriend() === false ) {
            text = "Add Friend"
            action = () => this.props.createFriendship({ status: "CONFIRMED", friend_id: this.props.user.id })
        } else {
            text = "Nah we ain't cool"
            action = () => this.props.deleteFriendship(this.props.friends[this.props.user.id])
        } 

        return (
            <div className="search-item">
                <Link to={`/users/${this.props.user.id}`}>
                <li>{this.props.user.name}</li>
                <button onClick={action}>{text}</button> 
                </Link>
            </div>
        )
    }
}


