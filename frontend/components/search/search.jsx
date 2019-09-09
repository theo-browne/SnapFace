import React from 'react'
import SearchItem from './search_item'

export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.clear = this.clear.bind(this)
        
    }


    handleChange(e){
        
        if (e.target.value === "") {
            this.setState({ name: e.target.value })
            this.props.removeUsers()
            return
        }
        this.setState({name: e.target.value})
        setTimeout(() => this.props.fetchUsers({name: this.state.name.toLowerCase()}), 0)
 
        // this.props.fetchUsers(this.state)

    }
    clear(){
        this.setState({name: ""})
        this.props.removeUsers()
    }

    render(){
        
        let users = []
        let name = "search-results"
        if (this.state.name) {
            users = this.props.users.slice(0)
        } else {
            name = "search-results-none"
        }
    
        return(
            <div className="search-bar">
                
                <form action="" onSubmit={this.handleSubmit}>
                  <div>
                    <input type="text" value={this.state.name} placeholder="Search" onChange={this.handleChange}/>
                    </div>
                </form>
            <div className={name}>
                    <ul className="users-list" onClick={this.clear} >
                        {users.map(user => <SearchItem key={user.id} receiveUser={this.props.receiveUser} deleteFriendship={this.props.deleteFriendship} createFriendship={this.props.createFriendship} friends={this.props.friends} user={user}/> )}
                      
                </ul>
            </div>
            </div>
        )
    }
}