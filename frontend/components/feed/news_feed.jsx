import React from 'react'
import NewsFeedItem from './news_feed_item'
import PostFormContainer from '../posts/post_form_container'
import PostEditContainer from '../posts/post_edit_container'
import {Route} from 'react-router-dom'

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
                <Route path={`/posts/:id/edit`} component={PostEditContainer} />
                <PostFormContainer user={this.props.currentUser} />
                <ul>
                    {this.props.posts.map(post => <NewsFeedItem key={post.id} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} post={post} />)}
                </ul>
            </div>
        )
    }
}