import React from 'react'

export default class CommentEditForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.comment
        this.rows = 1
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ body: e.target.value })
        if ((this.state.body.length % 50) === 0) {
            this.rows = (this.state.body.length / 50) + 1
        }
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.createComment(this.state).then(() => this.setState({ body: "" }))
        this.rows = 1
    }


    render(){
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit} >
                    <textarea onChange={this.handleChange} value={this.state.body} placeholder="Write a comment" cols="30" rows={this.rows}></textarea>
                    <input type="submit" onSubmit={this.handleSubmit} className="comment-submit" value="" />
                </form>
            </div>
        )
    }
}