import React from 'react'
import {Link} from 'react-router-dom'

export default class NewsFeedItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="post" key={this.props.post.id}>
                <div className="post-author">
                    
                    <img src="https://image.flaticon.com/icons/svg/149/149452.svg" alt=""/>
                    <div>
                    <Link to={`/users/${this.props.post.authorId}`}>{this.props.post.author}</Link>
                {/* <a  href="">{this.props.post.author}</a> */}
                <p>{this.props.post.time}</p>
                </div>
                </div>
                
                <p>
                {this.props.post.body}
                </p>
               
            </div>
        )
    }
}