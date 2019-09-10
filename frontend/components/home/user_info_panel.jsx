import React from 'react'

export default class UserInfoPanel extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id)
    }
    isFriend() {
        
        return Object.keys(this.props.friends).includes(String(this.props.user.id))
    }

    render(){
        
        if (this.props.user === undefined) return null

        let text = ""
        let action = ""
        
        if (!this.props.user.friendId) {
            text = "Add Friend"
            action = () => this.props.createFriendship({ status: "CONFIRMED", friend_id: this.props.user.id })
        } else {
            text = "Unfriend"
            action = () => this.props.deleteFriendship(this.props.user.friendId)
        } 
        let button = (this.props.currentUser.id !== this.props.user.id) ? <button className="profile-button" onClick={action}>{text}</button> : null

        return(
            <div className="user-info-panel">
                <div className="cover-photo">
                    
                        <div className="profile-photo">
                        </div>
                        <p className="user-name">{this.props.user.name}</p>
                        <div className="profile-buttons">
                            {button}
                        </div>
                        </div>
                <div className="user-info-panel-bottom">

                </div>
            </div>
        )
    }
}