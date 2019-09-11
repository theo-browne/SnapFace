import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = props => {
    const name = props.user.name.split(" ")[0]
    
    return(
        <div className="user-info">
            <Link to={`/users/${props.user.id}`} >{name}</Link>
            <Link to={`/`}>Home</Link>
            <img className="profile-icon" src="https://image.flaticon.com/icons/svg/1006/1006052.svg" alt="" />
            <button onClick={() => props.logoutUser()}>Logout</button>
        </div>
    )
}
export default NavBar