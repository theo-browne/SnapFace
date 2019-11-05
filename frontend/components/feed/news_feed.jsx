import React from 'react'
import NewsFeedItem from './news_feed_item'
import PostFormContainer from '../posts/post_form_container'
import PostEditContainer from '../posts/post_edit_container'
import {Route, Link} from 'react-router-dom'
import CommentEditFormContainer from '../comments/commnent_edit_form_container'
import SuggestedFriendItem from '../home/suggested_friend_item'
import PhotoModalContainer from './photo_modal_container'
import MessageForm from '../messaging/message_form'


export default class NewsFeed extends React.Component {
    constructor(props){
        super(props)
        this.page = 1
        this.ready = true 
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        this.props.fetchPosts(1)
        this.event = window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',  this.handleScroll)
    }

    handleScroll(e){
        const ul = document.querySelector(".news-feed")
        const lastEl = ul.lastElementChild
        if (!lastEl) return null
        if (lastEl.offsetTop - pageYOffset < window.innerHeight && this.ready){
            this.page += 1
            this.props.fetchPosts(this.page)
            this.ready = false
            setTimeout(() => this.ready = true, 1000)
        }
        if (this.page > this.props.maxPages) {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }


    render(){
        if (this.props.posts === undefined) return null
        return(
            <div className="feed" >
                <div className="feed-sidebar">
                    <div className="feed-sidebar-user">
                        <Link to={`/users/${this.props.currentUser.id}`} >
                            <img src={this.props.currentUser.profileUrl} alt=""/>
                            <li>{this.props.currentUser.name}</li>
                        </Link>
                    </div>
                    <div className="github">
                        <a href="https://github.com/theo-browne">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            <li>Github</li>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/theodore-browne-7201a3165" className="linked">
                            <img src="https://media.licdn.com/dms/image/C4E0BAQGBBp0LaObq0A/company-logo_200_200/0?e=2159024400&v=beta&t=tyrD06lDsdOelMjanHDd2gC1iqekh_JWTaXny9bAT4o" alt=""/>
                            <li>LinkedIn</li>
                        </a>
                    </div>
                </div>
                <div className="feed-main">
                    <Route path={`/posts/:postId/edit`} component={PostEditContainer} />
                    <Route exact path={`/posts/:postId`} component={PhotoModalContainer}/>
                    <PostFormContainer user={this.props.currentUser} />
                    <ul className="news-feed">
                        {this.props.posts.map(post => <NewsFeedItem key={post.id} 
                        updateReaction={this.props.updateReaction} deleteReaction={this.props.deleteReaction} 
                        createReaction={this.props.createReaction} fetchComments={this.props.fetchComments} 
                        deletePost={this.props.deletePost} currentUser={this.props.currentUser} 
                        post={post} />)}
                    </ul>
                </div>
                <div className="feed-sponsored">
                    <p>Suggested Friends</p>
                    {this.props.users.map(user => <SuggestedFriendItem key={user.id} 
                    createFriendship={this.props.createFriendship} user={user} />)}
                </div>
            </div>
        )
    }
}