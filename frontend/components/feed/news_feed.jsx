import React from 'react'
import NewsFeedItem from './news_feed_item'
import PostFormContainer from '../posts/post_form_container'

export default class NewsFeed extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchPosts()
    }


    render(){
        if (this.props.posts === undefined) return null
        return(
            <div className="feed">
                <PostFormContainer />
                <ul>
                    {this.props.posts.map(post => <NewsFeedItem key={post.id} post={post} />)}
                </ul>
            </div>
        )
    }
}