import React from 'react'

export default class SuggestedFriendsItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="suggested-friends">
            <div className="suggested-details">
                    <div className="suggested-img">
                <img src={this.props.user.profileUrl} alt=""/>
                </div>
                <li>{this.props.user.name}</li>
            </div>
            <button>Add Friend</button>
        </div>
        )
    }
}