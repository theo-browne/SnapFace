import React from 'react'
import {Link} from 'react-router-dom'
import CommentFormContainer from '../comments/comment_form_container'


export default class NewsFeedItem extends React.Component {
    constructor(props){
        super(props)
        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)
    }
    showDropdown(e){
        e.currentTarget.lastChild.classList.add('show')
        
    }
    hideDropdown(e){
        e.currentTarget.lastChild.classList.remove('show')
    }

    render(){
        if (this.props.post === undefined) return null
        let button;
        if (this.props.currentUser.id === this.props.post.authorId){
            button = ( 
                <button className="post-delete-button" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}  >...
                    <div className="post-drop-down" >
                        <li onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</li>

                        <Link to={`/posts/${this.props.post.id}/edit`}><li >Edit Post</li></Link>
                    </div>
                </button>
            )
        }
        const photo = this.props.post.photoUrl ? (<img className="post-photo" src={this.props.post.photoUrl} alt="" />) : null
        return(
            <div className="post-container">
            <div className="post" key={this.props.post.id}>
                {button}
                <div className="post-author">
                    
                    <Link to={`/users/${this.props.post.authorId}`}> <img src={this.props.post.profileUrl} className="profile-icon" alt="" /></Link>
                    <div className="post-info">
                    <Link to={`/users/${this.props.post.authorId}`}>{this.props.post.author}</Link>
                
                <p>{this.props.post.time}</p>
                </div>
                
                </div>
                <div className="post-content">
                <p>
                {this.props.post.body}
                </p>
              <br/>
                {photo}
                </div>
                
            </div>
                <div className="post-interactions-container"></div>
                <CommentFormContainer post={this.props.post} />
            </div>
        )
    }
}