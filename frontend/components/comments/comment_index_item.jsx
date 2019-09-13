import React from 'react'
import {Link, Route} from 'react-router-dom'
import CommentEditFormContainer from './commnent_edit_form_container'
import CommentEditForm from './comment_edit_form'

export default class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false,
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
   
    render(){
        
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

            <Link to={`/users/${this.props.comment.authorId}`}><img className="comment-image" src={this.props.comment.profileUrl} alt="" /></Link>
            <div className="comment-content">

                <li className="comment-show">
                    <Link to={`/users/${this.props.comment.authorId}`} className="comment-author-link">{this.props.comment.author}</Link>
                    {comment}
                </li>
            </div>
            {button}

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