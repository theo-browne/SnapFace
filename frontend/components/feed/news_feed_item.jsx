import React from 'react'


export default class NewsFeedItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="post">
                <div className="post-author">
                    
                    <img src="https://image.flaticon.com/icons/svg/149/149452.svg" alt=""/>
                    <div>
                <a  href="">{this.props.post.author}</a>
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