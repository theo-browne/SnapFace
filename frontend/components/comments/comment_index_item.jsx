import React from 'react'
import {Link, Route} from 'react-router-dom'
import CommentEditFormContainer from './commnent_edit_form_container'
import CommentEditForm from './comment_edit_form'

export default class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            count: this.props.comment.reactions,
            reacted: this.props.comment.userReaction,
            reactionId: this.props.comment.userReactionId
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
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
            this.props.deleteReaction(this.state.reactionId).then(() => this.setState({ count: this.state.count -= 1, reacted: false, reactionId: false }))
        } else if (!this.state.reacted) {
            this.props.createReaction({ reacted_type: "Comment", reacted_id: this.props.comment.id, reaction_type: type }).then((res) => {
                this.setState({ count: this.state.count += 1, reacted: type, reactionId: res.reaction.id })
            }
            )
        } else {
            this.props.updateReaction({ id: this.state.reactionId, reacted_type: "Comment", reacted_id: this.props.comment.id, reaction_type: type }).then(() => this.setState({ reacted: type }))
        }
    }
   
    render(){
        const reacted = this.state.reacted ? this.state.reacted : null
        const counts = this.state.count ? (<div className="comment-interaction-details">
            <div className="comment-interaction-details-main">
                <img src="https://image.flaticon.com/icons/svg/1946/1946399.svg" alt="" />
                <p>{this.state.count}</p>
                {/* <p>{reacted}</p> */}
            </div>
        </div>) : <div></div>
        let button = null;
        if (this.props.currentUser.id === this.props.comment.authorId) {
            button = (
                <button className="comment-delete-button" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>...
                    <div className="comment-drop-down" >
                        <li onClick={() => this.props.deleteComment(this.props.comment.id)} className="comment-delete">Delete Comment</li>
                        <li onClick={() => this.setState({edit: true})}>Edit Comment</li>
                        {/* <Link to={`/comments/${this.props.comment.id}/edit`} onClick={() => this.props.setComment(this.props.comment)}><li >Edit Comment</li></Link> */}
                    </div>
                </button>
            )
        }
        let comment = "     " + this.props.comment.body
        let content = !this.state.edit ? (<div className="comment-div" >
            <div className="comment-div-main">
            <Link to={`/users/${this.props.comment.authorId}`}><img className="comment-image" src={this.props.comment.profileUrl} alt="" /></Link>
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
                        <img src="https://image.flaticon.com/icons/svg/1946/1946399.svg" onClick={() => this.react('like')} alt="" />
                        <img src="https://image.flaticon.com/icons/svg/1946/1946497.svg" onClick={() => this.react('dislike')} alt="" />
                        <img src="https://image.flaticon.com/icons/svg/1946/1946406.svg" onClick={() => this.react('love')} alt="" />
                        <img src="https://image.flaticon.com/icons/svg/1356/1356427.svg" onClick={() => this.react('laugh')} alt="" />
                        <img src="https://image.flaticon.com/icons/svg/1854/1854218.svg" onClick={() => this.react('sad')} alt="" />
                    </div>
                </button>
                    {counts}
                </div>

            </div>
            {/* <Route exact path={`/comments/:id/edit`} component={CommentEditFormContainer}></Route> */}
        </div>) : <CommentEditForm comment={this.props.comment} editSubmit={this.editSubmit} updateComment={this.props.updateComment}/>
        
        // if (this.props.comments ) {
        //     button = <button onClick={() => this.props.fetchComments(this.props.comment.postId, this.page)}>More Comments</button>
        // }
  
        return(
            <div>
                {content}
            </div>
        )
    }
}