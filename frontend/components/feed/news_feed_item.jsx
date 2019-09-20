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
        // this.count = this.props.post.reactions
        this.state = {
            count: this.props.post.reactions,
            reacted: this.props.post.userReaction,
            reactionId: this.props.post.userReactionId,
            reactionImg: this.props.post.userReactionImg
        }
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
        if (type === this.state.reacted ) {
            this.props.deleteReaction(this.state.reactionId).then(() => this.setState({ count: this.state.count -= 1, reacted: false, reactionId: false, reactionImg: this.props.post.likeImg }))
        } else if (!this.state.reacted) {
            this.props.createReaction({reacted_type: "Post", reacted_id: this.props.post.id, reaction_type: type}).then((res) => {
                this.setState({count: this.state.count += 1, reacted: type, reactionId: res.reaction.id, reactionImg: this.props.post[`${type}Img`]})}
                )
        } else {
            this.props.updateReaction({ id: this.state.reactionId, reacted_type: "Post", reacted_id: this.props.post.id, reaction_type: type }).then(() => this.setState({ reacted: type, reactionImg: this.props.post[`${type}Img`] }))
        }
    }

    render(){
        if (this.props.post === undefined) return null
        let button;
        let editRoute = this.props.profile ? `/users/${this.props.user.id}/posts/${this.props.post.id}/edit` : `/posts/${this.props.post.id}/edit`
        
        if (this.props.currentUser.id === this.props.post.authorId){
            button = ( 
                <button className="post-delete-button" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}  >...
                    <div className="post-drop-down" >
                        <li onClick={() => this.props.deletePost(this.props.post.id)} className="post-delete">Delete Post</li>
                        <Link to={editRoute}><li >Edit Post</li></Link>
                    </div>
                </button>
            )
        }
        const reacted = this.state.reacted ? <img src={this.state.reactionImg} alt=""/> : "React"
        const counts = this.state.count ? (<div className="post-interaction-details">
            <div className="post-interaction-details-main">
            {/* <img src="https://image.flaticon.com/icons/svg/1946/1946399.svg" alt="" /> */}
            <img src={this.state.reactionImg} alt=""/>
            <p>{this.state.count}</p>
            {/* <p>{reacted}</p> */}
            </div>
        </div>) : null

        let photoRoute = this.props.profile ? `/users/${this.props.user.id}/posts/${this.props.post.id}` : `/posts/${this.props.post.id}`

        const photo = this.props.post.photoUrl ? ( 
        <Link to={photoRoute}><img className="post-photo" src={this.props.post.photoUrl} alt="" /> 
            </Link>) : null
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
            {counts}
                <div className="post-interactions-container">
                    <button className="react-button" onMouseEnter={this.revealDropdown} onMouseLeave={this.unrevealDropdown}>{reacted}
                            <div className="reaction-pop-up">
                            <img src={this.props.post.likeImg} onClick={() => this.react('like')} alt=""/>
                            <img src={this.props.post.loveImg} onClick={() => this.react('love')} alt=""/>
                            <img src={this.props.post.laughImg} onClick={() => this.react('laugh')} alt=""/>
                            <img src={this.props.post.wowImg} onClick={() => this.react('wow')} alt=""/>
                            <img src={this.props.post.sadImg} onClick={() => this.react('sad')} alt=""/>
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