import React from 'react'
import SearchContainer from '../search/search_container'
import NewsFeedContainer from '../feed/news_feed_container'
import { Switch, Route } from 'react-router-dom'
import ProfileFeedContainer from '../feed/profile_feed_container'
import { Link, withRouter } from 'react-router-dom'
import { ProtectedRoute } from '../../util/route_util'
import PostEditContainer from '../posts/post_edit_container'
import UserInfoPanelContainer from './user_info_panel_container'
import NavBar from './nav_bar'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="home-container">
                <div className="home">
                    <div className="home-left">
                    </div>
                    <div className="home-mid" >
                        <Route path="/users/:id" component={UserInfoPanelContainer} />
                        <NavBar user={this.props.currentUser} logoutUser={this.props.logoutUser} />
                        <Switch>
                            <Route path="/users/:id" component={ProfileFeedContainer} />
                            <Route path="/" component={NewsFeedContainer} />
                        </Switch>
                    </div>
                    <div className="home-right">
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)