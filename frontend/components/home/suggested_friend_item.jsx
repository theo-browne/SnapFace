import React from 'react'
import {Link} from 'react-router-dom'


export default class SuggestedFriendsItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            added: false,
            text: "Add Friend"
        }
        this.handleClick = this.handleClick.bind(this)
    }
/**
 * The function that is called when a user clicks on a add friend button inside the suggested friends tab.
 *The function creates a friendship between the 2 users then changes the class of the button to indicate that
 the friendship has been created
 */
    handleClick(){
        this.props.createFriendship({ status: "CONFIRMED", friend_id: this.props.user.id }).then(() => 
        this.setState({added: true, text: "Added"}))
    }
/**
 * Renders a user entry in the suggested friends tab
 */

    render(){
        let button = !this.state.added ? (<button className="unadded-friend" 
        onClick={this.handleClick}>Add Friend</button>) :
        (<button className="added-friend">Added</button>)
        return(
        <div className="suggested-friends">
            <div className="suggested-details">
                <div className="suggested-img">
                    <Link to={`/users/${this.props.user.id}`}>
                        <img src={this.props.user.profileUrl} alt=""/>
                    </Link>
                </div>
                <div>
                    <Link to={`/users/${this.props.user.id}`}>
                        <li>{this.props.user.name}</li>
                    </Link>
                    <li className="mutual-friends">Mutual Friends: {this.props.user.mutualFriends}</li>
                </div>
                {button}
            </div>
        </div>
        )
    }
}