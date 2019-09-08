import React from 'react'


export default class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createPost(this.state).then(()=> this.setState({body: ""}))
    }

    render(){
        return(
            <div className="new-post-div">
                <div className="new-post-head"> Create Post</div>
                <img src="https://image.flaticon.com/icons/svg/149/149452.svg" alt="" />
                <form className="new-post" action="">
                    <textarea placeholder="Whats on your mind?" value={this.state.body} onChange={this.handleChange}  cols="30" rows="5"></textarea>
                    <br/>
                    <button onClick={this.handleSubmit}>Post</button>
                </form>
            </div>
        )
    }
}