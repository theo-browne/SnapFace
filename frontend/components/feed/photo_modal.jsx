import React from 'react'
import CommentIndexContainer from '../comments/comment_index_container'
import CommentFormContainer from '../comments/comment_form_container'
import {Link, Redirect} from 'react-router-dom'


export default class PhotoModal extends React.Component{
    constructor(props){
        super(props)
       
    }
    
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id)
            .then(() => this.setState({
            count: this.props.post.reactions,
            reacted: this.props.post.userReaction,
            reactionId: this.props.post.userReactionId,
            reactionImg: this.props.post.userReactionImg,
            post: this.props.post
            }))
        this.props.fetchComments(this.props.match.params.id, 1)
    }
    revealDropdown(e) {
        e.currentTarget.lastChild.classList.add('reveal')
    }

    unrevealDropdown(e) {
        e.currentTarget.lastChild.classList.remove('reveal')
    }
    react(type) {
        if (type === this.state.reacted) {
            this.props.deleteReaction(this.state.reactionId).then(() => this.setState({ count: this.state.count -= 1, reacted: false, reactionId: false, reactionImg: this.props.post.likeImg }))
        } else if (!this.state.reacted) {
            this.props.createReaction({ reacted_type: "Post", reacted_id: this.props.post.id, reaction_type: type }).then((res) => {
                this.setState({ count: this.state.count += 1, reacted: type, reactionId: res.reaction.id, reactionImg: this.props.post[`${type}Img`] })
            }
            )
        } else {
            this.props.updateReaction({ id: this.state.reactionId, reacted_type: "Post", reacted_id: this.props.post.id, reaction_type: type }).then(() => this.setState({ reacted: type, reactionImg: this.props.post[`${type}Img`] }))
        }
    }

    render(){
        if (this.state === null) return null
        
        const counts = this.state.count ? (<div className="post-interaction-details">
            <div className="post-interaction-details-main">
                {/* <img src="https://image.flaticon.com/icons/svg/1946/1946399.svg" alt="" /> */}
                <img src={this.state.reactionImg} alt="" />
                <p>{this.state.count}</p>
                {/* <p>{reacted}</p> */}
            </div>
        </div>) : null
        const reacted = this.state.reacted ? <img src={this.state.reactionImg} alt="" /> : "React"
        
        return(
            <div className="photo-modal">
                <div className="photo-modal-content">
                <div className="photo-modal-photo">
                    <img src={this.state.post.photoUrl} alt=""/>
                </div>
                <div className="photo-info">
                        <div className="photo-user-info">
                    <img src={this.state.post.profileUrl} alt=""/>
                    <p>{this.state.post.author}</p>
                    <Link to="/">X</Link>
                        </div>
                    {counts}
                        <div className="post-interactions-container">
                        <button className="react-button" onMouseEnter={this.revealDropdown} onMouseLeave={this.unrevealDropdown}>{reacted}
                            <div className="reaction-pop-up">
                                <img src={this.state.post.likeImg} onClick={() => this.react('like')} alt="" />
                                <img src={this.state.post.loveImg} onClick={() => this.react('love')} alt="" />
                                <img src={this.state.post.laughImg} onClick={() => this.react('laugh')} alt="" />
                                <img src={this.state.post.wowImg} onClick={() => this.react('wow')} alt="" />
                                <img src={this.state.post.sadImg} onClick={() => this.react('sad')} alt="" />
                            </div>
                        </button>
                       
                        <button className="comment-button" onClick={() => this.props.fetchComments(this.props.post.id, 1)}>Comment</button>
                        </div>
                        <CommentFormContainer post={this.state.post} />

                        <CommentIndexContainer post={this.state.post} />

                </div>
                    
                </div>
            </div>
        )
    }
}