import React from 'react'

export default class CommentEditForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.comment
        this.rows = 1
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.listen = false
        this.ready = true
    }

    componentDidMount(){
        // this.props.fetchComment(this.props.match.params.id)
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
        this.props.updateComment(this.state).then(() => {
            this.setState({ body: "" })
            this.props.editSubmit()
        })
        this.rows = 1
    }


    render(){
        if (this.props.comment === undefined) return null
        
        // if (this.props.comment.id !== +this.props.match.params.id ) return null
        return(
            <div>
                <form action="" className="edit-comment-form" onSubmit={this.handleSubmit} >
                    <img className="comment-image" src={this.props.comment.profileUrl} alt="" />
                    
                    <textarea onChange={this.handleChange} value={this.state.body} placeholder="Write a comment" cols="30" rows={this.rows}></textarea>
                    <button onClick={() => this.props.editSubmit()}>X</button>
                    {/* <input type="submit" onSubmit={this.handleSubmit} className="comment-submit" value="" /> */}
                </form>
            </div>
        )
    }
}