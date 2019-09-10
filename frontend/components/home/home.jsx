import React from 'react'
import SearchContainer from '../search/search_container'
import NewsFeedContainer from '../feed/news_feed_container'
import {Switch, Route} from 'react-router-dom'
import ProfileFeedContainer from '../feed/profile_feed_container'
import {Link, withRouter} from 'react-router-dom'
import {ProtectedRoute} from '../../util/route_util'
import PostEditContainer from '../posts/post_edit_container'

 class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const name = this.props.currentUser.name.split(" ")[0]
        return(
            <div className="home-container">
                <div className="home-nav" ></div>
            <div className="home">
                <div className="home-left">
                </div>
                <div className="home-mid">
                    <SearchContainer />
                    <div className="user-info">
                            <Link to={`/users/${this.props.currentUser.id}`} >{name}</Link>
                            <Link to={`/`}>Home</Link>
                             <img className="profile-icon" src="https://image.flaticon.com/icons/svg/1006/1006052.svg" alt="" />
                            <button onClick={() => this.props.logoutUser()}>Logout</button>
                    </div>
                    <Switch>
                            <Route path="/users/:id"  component={ProfileFeedContainer} />

                            <Route path="/" component={NewsFeedContainer} />
                            
                    </Switch>
                        <Route path={`/posts/:id/edit`} component={PostEditContainer} />
                </div>
                <div className="home-right">
                    

                </div>

            </div>
            </div>
        )
    }
}

export default withRouter(Home)