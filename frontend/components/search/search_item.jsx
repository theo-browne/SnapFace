import React from 'react'
import {Link} from 'react-router-dom'


export default class SearchItem extends React.Component {
    constructor(props){
        super(props)
    }
    /**
    * Renders an link to a user page  
    */
    render(){
        return (
            <div className="search-item">
                <Link to={`/users/${this.props.user.id}`} >
                    <li >{this.props.user.name}</li>
                </Link>
            </div>
        )
    }
}


