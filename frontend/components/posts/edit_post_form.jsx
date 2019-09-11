import React from 'react'
import {withRouter, Link} from 'react-router-dom'

 class EditPostForm extends React.Component{
    constructor(props){
        super(props)
        
        this.rows = 1
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id).then((post) => this.setState(this.props.post))
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.updatePost(this.state).then(() => this.props.history.goBack())
    }

    handleChange(e) {
        this.setState({ body: e.target.value })
        if ((this.state.body.length % 35) === 0) {
            this.rows = (this.state.body.length / 35) + 1
        }
    }

    render(){
        
        if (this.state === null ) return null
        
        return(
            <div className="edit-post-modal">
                <div className="edit">
                <div className="new-post-head"> Edit Post</div>
                    <div className="post-edit-content">
                <img className="profile-image" src={this.props.user.profileUrl} alt="" />
                <div className="modal-close">
                <Link to="/" >X</Link>
                    </div>
                <form className="new-post edit-post" action="">
                    <textarea  value={this.state.body} onChange={this.handleChange} cols="30" rows={this.rows}></textarea>
                    <br />
                    <button onClick={this.handleSubmit}>Edit</button>
                </form>
                    </div>
            </div>
            </div>
        )
    }
}


export default withRouter(EditPostForm)