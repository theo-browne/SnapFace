import React from 'react'

export default class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            post_id: this.props.post.id
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
                if (e.key === 'Enter' && this.ready ) {
                    this.handleSubmit()
                    this.listen = true
                    this.ready = false
                    setTimeout(() => {this.ready = true}, 500)
                }
            })
        
    }
    handleSubmit() {
        this.props.createComment(this.state).then(() => this.setState({body: ""})) 
        this.rows = 1
    }

    render(){
        const image = this.props.userPhoto || ""

        return(
            <div className="comment-form">
                <img className="comment-image"  src={image} alt="" />
                <form action="" onSubmit={this.handleSubmit} >
                    <textarea onChange={this.handleChange} value={this.state.body} 
                    placeholder="Write a comment" cols="30" rows={this.rows}>
                    </textarea>
                </form>
            </div>
        )
    }
}