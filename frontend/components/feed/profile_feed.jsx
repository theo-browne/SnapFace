import React from 'react'
import NewsFeedItem from './news_feed_item'
import {withRouter} from 'react-router-dom'


 class ProfileFeed extends React.Component {
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id).then(() => this.props.removeUsers())
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.fetchUser(this.props.match.params.id).then(() => this.props.removeUsers())
        }
    }
    

    render(){
        
        return(
            <div>
                {
                    this.props.posts.map(post => <NewsFeedItem key={post.id} currentUser={this.props.currentUser} user={this.props.user} post={post} /> )
                } 
            </div>
        )
    }
}

export default withRouter(ProfileFeed)