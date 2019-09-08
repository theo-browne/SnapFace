import React from 'react'
import SearchContainer from '../search/search_container'
import NewsFeedContainer from '../feed/news_feed_container'

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <div className="home-container">
                <div className="home-nav" ></div>
            <div className="home">
                <div className="home-left">
                </div>
                <div className="home-mid">
                    <SearchContainer />
                    <div className="user-info">
                            <a href="">{this.props.currentUser}</a>
                            <a href="">Home</a>
                             <img className="profile-icon" src="https://image.flaticon.com/icons/svg/1006/1006052.svg" alt="" />
                            <button onClick={() => this.props.logoutUser()}>Logout</button>
                    </div>
                    <NewsFeedContainer />
                </div>
                <div className="home-right">
                    

                </div>

            </div>
            </div>
        )
    }
}