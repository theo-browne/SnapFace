import React from 'react'
import EditUserFormContainer from '../posts/edit_user_form_container'
import {Link} from 'react-router-dom'


export default class UserInfoPanel extends React.Component {
    constructor(props){
        super(props)
        this.handleFile = this.handleFile.bind(this)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id)
    }

    isFriend() {
        
        return Object.keys(this.props.friends).includes(String(this.props.user.id))
    }
/**
* Allows a user to select a new profile photo from their device
* @param {event} e - The submit event triggered by a user clicking on their profile photo on their profile page.
*/
    handleFile(e) {
        const file = e.currentTarget.files[0];
        const formData = new FormData();
        formData.append('user[profile_photo]', file);
        this.props.updateUser(formData, this.props.user.id)   
        };

/**
* Reveals the Update modal over a users profile photo on their profile page
* @param {event} e - The submit event triggered by a user mousing over on their profile photo on their profile page.
*/
    showUpdate(e){
        e.currentTarget.childNodes[0].classList.add("shown")
    }
/**
* Hides the Update modal over a users profile photo on their profile page
* @param {event} e - The submit event triggered by a user's mouse leaving their profile photo on their profile page.
*/
    hideUpdate(e){
        e.currentTarget.childNodes[0].classList.remove("shown")
    }

    render(){
        
        if (this.props.user === undefined) return null
        if (this.props.friendship === undefined) return null
        let text = ""
        let action = ""
        
        if (!this.props.friendship.id) {
            text = "Add Friend"
            action = () => this.props.createFriendship({ status: "CONFIRMED", friend_id: this.props.user.id })
        } else {
            text = "Unfriend"
            action = () => this.props.deleteFriendship(this.props.friendship.id)
        } 

        let button = (this.props.currentUser.id !== this.props.user.id) ? <button className="profile-button" onClick={action}>{text}</button> : null
        let form = (this.props.currentUser.id === this.props.user.id) ? (<div className="profile-photo-link">
            <form action="" >
                <label className="file-input-label"> Update
                        <input className="file-input" size="600" type="file" onChange={this.handleFile} />
                </label>

            </form>
            </div>) : <div></div>

        let image = this.props.user.profileUrl || ""
       

        
        return(
            <div className="user-info-panel">
                <div>
                <div className="cover-photo">
                    
                        <div className="profile-photo"   onMouseEnter={this.showUpdate} onMouseLeave={this.hideUpdate}>
                        {form}
                            <img src={image} alt=""/>
                        
                        </div>
                        <p className="user-name">{this.props.user.name}</p>
                        <div className="profile-buttons">
                            {button}
                        </div>
                        </div>
                <div className="user-info-panel-bottom">
                </div>
                </div>
            </div>
        )
    }
}