import React from 'react'
import NewsFeedItem from './news_feed_item'
import {withRouter} from 'react-router-dom'
import PostFormContainer from '../posts/post_form_container'
import UserInfoPanel from '../home/user_info_panel'
import PostEditContainer from '../posts/post_edit_container'
import {Route} from 'react-router-dom'


 class ProfileFeed extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // this.props.fetchUser(this.props.match.params.id).then(() => this.props.removeUsers())
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.fetchUser(this.props.match.params.id).then(() => this.props.removeUsers())
        }
    }
    

    render(){
        if (this.props.user === undefined) return null
        let form = null
        if (this.props.currentUser.id === this.props.user.id) {
            form = (<PostFormContainer user={this.props.user} />)
        }
        return(
            <div className="profile-feed">
                <Route path={`/posts/:id/edit`} component={PostEditContainer} />

                {form}
                {
                    this.props.posts.map(post => <NewsFeedItem key={post.id} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} user={this.props.user} post={post} /> )
                } 
            </div>
        )
    }
}

export default withRouter(ProfileFeed)