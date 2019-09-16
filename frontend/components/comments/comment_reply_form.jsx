import React from 'react'

export default class CommentReplyForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            post_id: this.props.comment.post_id
        }
        this.rows = 1
        this.listen = false
        this.ready = true
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ body: e.target.value })
        if ((this.state.body.length % 50) === 0) {
            this.rows = (this.state.body.length / 50) + 1
        }
        e.target.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.ready) {
                this.handleSubmit()
                this.listen = true
                this.ready = false
                setTimeout(() => { this.ready = true }, 500)
            }
        })

    }

    handleSubmit(e) {
        // e.preventDefault()
        this.props.createComment(this.state).then(() => this.setState({ body: "" }))
        this.rows = 1
    }


    render(){
        return(
            <div>
                <button className="comment-reply-button">
                    <form className="comment-reply-form" action="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                </button>
            </div>
        )
    }
}