import React from 'react'
import NewsFeedItem from './news_feed_item'

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
                <form action="">


                </form>
                <ul>
                    {this.props.posts.map(post => <NewsFeedItem key={post.id} post={post} />)}
                </ul>
            </div>
        )
    }
}