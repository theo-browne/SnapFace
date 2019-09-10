import React from 'react'
import {Link} from 'react-router-dom'


export default class SearchItem extends React.Component {
    constructor(props){
        super(props)
        // this.handleClick = this.handleClick.bind(this)
    }
    

    isFriend(){
       return Object.keys(this.props.friends).includes(String(this.props.user.id))
    }
    // handleClick() {
    //     this.props.receiveUser(this.props.user.id)
    // }

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


