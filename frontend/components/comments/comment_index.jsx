import React from 'react'
import CommentIndexItem from './comment_index_item'
export default class CommentIndex extends React.Component{
    constructor(props){
        super(props)
        this.page = 1
        this.handleClick = this.handleClick.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.prev = 0
        // this.show = true
        this.state = {
            show: false,
        }
    }
    componentDidUpdate(prevProps){
        
        if (prevProps.comments.length !== this.props.comments.length) {
            this.setState({show: true})
        }
    }

    handleClick(e){
        this.page += 1
        let cur = e.target.previousSibling.childElementCount
        this.setState({ show: false })
        this.props.fetchComments(this.props.post.id, this.page)   
    }
    handleHide(){
        this.props.removeComments(this.props.post.id)
        this.page = 1
        this.setState({show: true})
    }

    render(){
        let button = (this.props.comments.length > 0 && this.state.show) ? <button onClick={this.handleClick}>More Comments...</button> : null
        let hide = this.props.comments.length ? <button onClick={this.handleHide} > Hide Comments...</button> : null
        return(
            <div className="comment-index">
                <ul>
                    {this.props.comments.map(comment => <CommentIndexItem key={comment.id} setComment={this.props.setComment} deleteComment={this.props.deleteComment} updateComment={this.props.updateComment} currentUser={this.props.currentUser} comment={comment} /> )}
                </ul>
                {button}
                {hide}
            </div>
        )
    }
}