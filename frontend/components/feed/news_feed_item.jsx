import React from 'react'
import {Link} from 'react-router-dom'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexContainer from '../comments/comment_index_container'

export default class NewsFeedItem extends React.Component {
    constructor(props){
        super(props)
        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)
        this.react = this.react.bind(this)
    }
    showDropdown(e){
        e.currentTarget.lastChild.classList.add('show')
    }
    hideDropdown(e){
        e.currentTarget.lastChild.classList.remove('show')
    }

    revealDropdown(e){
        e.currentTarget.lastChild.classList.add('reveal')
    }

    unrevealDropdown(e){
        e.currentTarget.lastChild.classList.remove('reveal')
    }

    react(type){
        this.props.createReaction({reacted_type: "Post", reacted_id: this.props.post.id, reaction_type: type})
    }

    render(){
        if (this.props.post === undefined) return null
        let button;
        if (this.props.currentUser.id === this.props.post.authorId){
            button = ( 
                <button className="post-delete-button" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}  >...
                    <div className="post-drop-down" >
                        <li onClick={() => this.props.deletePost(this.props.post.id)} className="post-delete">Delete Post</li>
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
                <div className="post-interactions-container">
                  
                    <button className="react-button" onMouseEnter={this.revealDropdown} onMouseLeave={this.unrevealDropdown}>React
                            <div className="reaction-pop-up">
                            <img src="https://image.flaticon.com/icons/svg/1946/1946399.svg" onClick={() => this.react('like')} alt=""/>
                            <img src="https://image.flaticon.com/icons/svg/1946/1946497.svg" onClick={() => this.react('dislike')}alt=""/>
                            <img src="https://image.flaticon.com/icons/svg/1946/1946406.svg" onClick={() => this.react('love')} alt=""/>
                            <img src="https://image.flaticon.com/icons/svg/1356/1356427.svg" onClick={() => this.react('laugh')} alt=""/>
                            <img src="https://image.flaticon.com/icons/svg/1854/1854218.svg" onClick={() => this.react('sad')} alt=""/>
                                {/* <button>LIKE</button> */}
                                {/* <button>LOVE</button>
                                <button>LAUGH</button> */}
                                {/* <button>SAD</button>
                                <button>ANGRY</button> */}
                            </div>
                        </button>
                  
                    <button className="comment-button" onClick={() => this.props.fetchComments(this.props.post.id, 1)}>Comment</button>
                       
                    
                </div>
                <CommentFormContainer post={this.props.post} />
                <CommentIndexContainer post={this.props.post}/>
            </div>
        )
    }
}