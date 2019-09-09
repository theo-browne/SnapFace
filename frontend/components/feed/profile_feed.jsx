import React from 'react'
import NewsFeedItem from './news_feed_item'

export default class ProfileFeed extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id)
    }

    render(){
        
        return(
            <div>
                {
                    this.props.posts.map( post => <NewsFeedItem key={post.id} post={post} /> )
                } 
            </div>
        )
    }
}