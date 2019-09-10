import React from 'react'
import EditUserFormContainer from '../posts/edit_user_form_container'
import {Link} from 'react-router-dom'


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

    showUpdate(e){
        e.currentTarget.childNodes[0].classList.add("shown")
    }
    hideUpdate(e){
        e.currentTarget.childNodes[0].classList.remove("shown")
    }

    render(){
        
        if (this.props.user === undefined) return null

        let text = ""
        let action = ""
        
        if (!this.props.friendship) {
            text = "Add Friend"
            action = () => this.props.createFriendship({ status: "CONFIRMED", friend_id: this.props.user.id })
        } else {
            text = "Unfriend"
            action = () => this.props.deleteFriendship(this.props.friendship.id)
        } 
        let button = (this.props.currentUser.id !== this.props.user.id) ? <button className="profile-button" onClick={action}>{text}</button> : null
        let form = (this.props.currentUser.id === this.props.user.id) ? (<div className="profile-photo-link">
            <form action="">
                <label className="file-input-label"> Update
                        <input className="file-input" size="600" type="file" onChange={this.handleFile} />
                </label>
            </form>
            </div>) : <div></div>

        return(
            <div className="user-info-panel">
                <div className="cover-photo">
                    
                        <div className="profile-photo" onMouseEnter={this.showUpdate} onMouseLeave={this.hideUpdate}>
                        {form}
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