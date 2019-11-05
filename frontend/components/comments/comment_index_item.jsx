import React from 'react'
import {Link} from 'react-router-dom'
import CommentEditForm from './comment_edit_form'


export default class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            count: this.props.comment.reactions,
            reacted: this.props.comment.userReaction,
            reactionId: this.props.comment.userReactionId,
            reactionImg: this.props.comment.userReactionImg
        }
        this.editSubmit = this.editSubmit.bind(this)
    }
    editSubmit(){
        this.setState({edit: false})
    }
    showDropdown(e) {
        e.currentTarget.lastChild.classList.add('show')
    }
    hideDropdown(e) {
        e.currentTarget.lastChild.classList.remove('show')
    }
    revealDropdown(e) {
        e.currentTarget.lastChild.classList.add('reveal')
    }
    unrevealDropdown(e) {
        e.currentTarget.lastChild.classList.remove('reveal')
    }

    react(type) {
        if (type === this.state.reacted) {
            this.props.deleteReaction(this.state.reactionId).then(() => 
            this.setState({ count: this.state.count -= 1, reacted: false, reactionId: false,  
                reactionImg: this.props.comment.likeImg }))
        } else if (!this.state.reacted) {
            this.props.createReaction({ reacted_type: "Comment", reacted_id: this.props.comment.id, 
            reaction_type: type })
            .then((res) => {
                this.setState({ count: this.state.count += 1, reacted: type, reactionId: res.reaction.id, 
                    reactionImg: this.props.comment[`${type}Img`] })
            }
            )
        } else {
            this.props.updateReaction({ id: this.state.reactionId, reacted_type: "Comment", 
            reacted_id: this.props.comment.id, reaction_type: type })
            .then(() => this.setState({ reacted: type, reactionImg: this.props.comment[`${type}Img`] }))
        }
    }
   
    render(){
        const reacted = this.state.reacted ? this.state.reacted : null
        const counts = this.state.count ? (<div className="comment-interaction-details">
            <div className="comment-interaction-details-main">
                <img src={this.state.reactionImg} alt="" />
                <p>{this.state.count}</p>
            </div>
        </div>) : <div></div>
        let button = null;
        let photo = this.props.comment.profileUrl
        if (this.props.currentUser.id === this.props.comment.authorId) {
            button = (
                <button className="comment-delete-button" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>...
                    <div className="comment-drop-down" >
                        <li onClick={() => this.props.deleteComment(this.props.comment.id)} className="comment-delete">Delete Comment</li>
                        <li onClick={() => this.setState({edit: true})}>Edit Comment</li>
                    </div>
                </button>
            )
            photo = this.props.currentUser.profileUrl
        }
        let comment = "     " + this.props.comment.body
        let content = !this.state.edit ? (<div className="comment-div" >
            <div className="comment-div-main">
                <Link to={`/users/${this.props.comment.authorId}`}><img className="comment-image" src={photo} alt="" /></Link>
            <div className="comment-content">
                <li className="comment-show">
                    <Link to={`/users/${this.props.comment.authorId}`} className="comment-author-link">{this.props.comment.author}</Link>
                    {comment}
                </li>
            </div>
            {button}
            </div>
            <div>
                <div className="comment-react">
                <button className="react-button" onMouseEnter={this.revealDropdown} onMouseLeave={this.unrevealDropdown}>React
                    <div className="comment-reaction-pop-up">
                            <img src={this.props.comment.likeImg} onClick={() => this.react('like')} alt="" />
                            <img src={this.props.comment.loveImg} onClick={() => this.react('love')} alt="" />
                            <img src={this.props.comment.laughImg} onClick={() => this.react('laugh')} alt="" />
                            <img src={this.props.comment.wowImg} onClick={() => this.react('wow')} alt="" />
                            <img src={this.props.comment.sadImg} onClick={() => this.react('sad')} alt="" />
                    </div>
                </button>
                    {counts}
                </div>

            </div>
        </div>) : <CommentEditForm comment={this.props.comment} editSubmit={this.editSubmit} updateComment={this.props.updateComment}/>
        return(
            <div>
                {content}
            </div>
        )
    }
}