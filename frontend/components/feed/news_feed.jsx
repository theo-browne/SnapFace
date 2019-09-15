import React from 'react'
import NewsFeedItem from './news_feed_item'
import PostFormContainer from '../posts/post_form_container'
import PostEditContainer from '../posts/post_edit_container'
import {Route} from 'react-router-dom'
import CommentEditFormContainer from '../comments/commnent_edit_form_container'


export default class NewsFeed extends React.Component {
    constructor(props){
        super(props)
        this.page = 2
        this.ready = true 
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        this.props.fetchPosts(1)
        this.props.fetchPosts(2);
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
                        <img src={this.props.currentUser.profileUrl} alt=""/>
                        <li>{this.props.currentUser.name}</li>
                    </div>
                    <div>
                        <a href="https://github.com/theo-browne">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            <li>Github</li>
                            </a>
                    </div>
                </div>
                <div className="feed-main">
                <Route path={`/posts/:id/edit`} component={PostEditContainer} />
                {/* <Route exact path={`/comments/:id/edit`} component={CommentEditFormContainer}></Route> */}
                
                <PostFormContainer user={this.props.currentUser} />
                <ul className="news-feed">
                    {this.props.posts.map(post => <NewsFeedItem key={post.id} updateReaction={this.props.updateReaction} deleteReaction={this.props.deleteReaction} createReaction={this.props.createReaction} fetchComments={this.props.fetchComments} deletePost={this.props.deletePost} currentUser={this.props.currentUser} post={post} />)}
                </ul>
                </div>
                <div className="feed-sponsored">
                    
                </div>
            </div>
        )
    }
}