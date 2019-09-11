import React from 'react'
import {withRouter} from 'react-router-dom'


 class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            photoUrl: null,
            photoFile: null
        }
        this.rows = 1
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleChange(e){
        this.setState({body: e.target.value})
        if ((this.state.body.length % 35) === 0) {
            this.rows = (this.state.body.length / 35) + 1
        } 
    }
    handleFile(e) {
        
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }


    handleSubmit(e){
        
        e.preventDefault()
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        

        this.props.createPost(formData).then(()=> this.setState({body: "", photoFile: null, photoUrl: null}))
    }

    render(){
        
        const image = this.props.user.profileUrl || ""
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return(
            <div className="new-post-div">
                <div className="new-post-head"> Create Post</div>
                <img className="form" src={image} alt="" />
                <form className="new-post" action="">
                    <textarea placeholder="Whats on your mind?" value={this.state.body} onChange={this.handleChange}  cols="30" rows={this.rows}></textarea>
                    <br/>
                    <label className="file-input-label"> Upload a file
                        <input className="file-input" size="600" type="file" onChange={this.handleFile} />
                    </label>
                    <button onClick={this.handleSubmit}>Post</button>
                </form>
                {preview}
            </div>
        )
    }
}

export default withRouter(PostForm)