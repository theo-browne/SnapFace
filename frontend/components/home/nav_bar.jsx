import React from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from '../search/search_container'
import MessagesContainer from '../messaging/messages_container'


const NavBar = props => {
    const name = props.user.name.split(" ")[0]
    
    return(
        <div className="home-nav">
   
            <div className="home-nav-content">
            {/* <div className="home-nav" ></div> */}
            <SearchContainer />
        <div className="user-info">
        
            <img src={props.user.profileUrl} alt="" className="nav-user-icon"/>
       
      
            <Link to={`/users/${props.user.id}`} >{name}</Link>
            <Link to={`/`}>Home</Link>
            <img className="profile-icon" src="https://image.flaticon.com/icons/svg/1006/1006052.svg" alt="" />
                <MessagesContainer />
            <button onClick={() => props.logoutUser()}>Logout</button>
        </div>
            </div>
        
     </div>

    )
}
export default NavBar