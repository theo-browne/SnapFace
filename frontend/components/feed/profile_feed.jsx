import React from 'react'
import NewsFeedItem from './news_feed_item'
import {withRouter} from 'react-router-dom'
import PostFormContainer from '../posts/post_form_container'
import UserInfoPanel from '../home/user_info_panel'
import PostEditContainer from '../posts/post_edit_container'
import { Route, Link} from 'react-router-dom'
import PhotoModalContainer from '../feed/photo_modal_container'


 class ProfileFeed extends React.Component {
    constructor(props){
        super(props)
        this.page = 1
        this.ready = true
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        this.props.clearUsers()
        this.props.fetchUser(this.props.match.params.id, 1).then(() => this.props.removeUsers())
        window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.clearUsers()
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
         if (!ul) return
         const lastEl = ul.lastElementChild
         if (!lastEl) return
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
        let num = (this.props.user.friends > 0) ? (this.props.user.friends - 1) : 0

        
        if (this.props.currentUser.id === this.props.user.id) {
            form = (<PostFormContainer user={this.props.user} />)   
        }
        const photos = this.props.user.postPhotos || []
        return(
            <div className="profile-feed">
                
                <Route exact path={`/posts/:id`} component={PhotoModalContainer} />
                <Route path={`/posts/:id/edit`} component={PostEditContainer} />
                <div className="profile-feed-info">
                    <div className="friends-info">
                        <div>
                        <img className="profile-icon" src="https://image.flaticon.com/icons/svg/1006/1006052.svg" alt="" />
                        <p>Friends {num}</p>
                        </div>
                        <div>
                        <div className="friends-photo-grid">
                            {this.props.friends.map(friend => <div key={friend.id}>
                                <Link to={`/users/${friend.id}`}>
                                <img src={friend.profileUrl} alt=""/>
                                <p>{friend.name}</p>
                                </Link>
                                </div>)}
                        </div>
                        </div>
                    </div>

                    <div className="users-photos">
                    
                        <p>Photos</p>
                        <div className="profile-photo-grid">
                            {photos.map((photo,idx) => 
                                <div key={idx}  className="profile-photo-grid-photo">
                                <img  src={photo}></img>
                                 </div>
                        )}
                        </div>
                    </div>
                   
                </div>
                <div>
                {form}
                    <ul className="news-feed"> 
                {
                        this.props.posts.map(post => <NewsFeedItem key={post.id} updateReaction={this.props.updateReaction} deleteReaction={this.props.deleteReaction} createReaction={this.props.createReaction} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} user={this.props.user} post={post} /> )
                } 
                </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileFeed)