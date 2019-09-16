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
        this.page = 1
        this.ready = true
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        this.props.fetchUser(this.props.match.params.id, 1).then(() => this.props.removeUsers())
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.fetchUser(this.props.match.params.id, 1).then(() => this.props.removeUsers())
            this.page = 1
            this.ready = true
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
        this.props.removePosts()
    }

     handleScroll(e) {
         const ul = document.querySelector(".news-feed")

         const lastEl = ul.lastElementChild
         if (lastEl.offsetTop - pageYOffset < window.innerHeight && this.ready) {
             this.page += 1
             this.props.fetchUser(this.props.match.params.id, this.page)
             this.ready = false
             setTimeout(() => this.ready = true, 1000)
         }
         if (this.page > this.props.maxPages) {
             window.removeEventListener('scroll', this.handleScroll)
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
                    <ul className="news-feed"> 
                {
                        this.props.posts.map(post => <NewsFeedItem key={post.id} updateReaction={this.props.updateReaction} deleteReaction={this.props.deleteReaction} createReaction={this.props.createReaction} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} user={this.props.user} post={post} /> )
                } 
                </ul>
            </div>
        )
    }
}

export default withRouter(ProfileFeed)