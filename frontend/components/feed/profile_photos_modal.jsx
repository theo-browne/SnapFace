import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class ProfilePhotosModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pos: Number(this.props.match.params.pos)
        }
        // this.pos = this.props.match.params.pos
    }

    render(){
        
        let cur = this.props.photos[this.state.pos]
        let next = null
        let back  = null
        let el = ">"
        let rev = "<"
        if (this.state.pos < this.props.photos.length - 1 ) {
            next = (<Link to={`/users/${this.props.match.params.id}/photos/${+this.state.pos + 1}`}>
                <p className="next-arrow" onClick={() => this.setState({ pos: +this.state.pos + 1 })} alt="" >{el}</p>
            </Link>)
        } 

        if (this.state.pos > 0) {
            back = (<Link to={`/users/${this.props.match.params.id}/photos/${+this.state.pos - 1}`}>
                <p className="back-arrow" onClick={() => this.setState({ pos: +this.state.pos -1 })} alt="" >{rev}</p>
            </Link>)
        }
        return(
            <Link to={`/users/${this.props.match.params.id}`}>
                <div className="photo-modal">
                    <div className="profile-modal-content">
                        {next}
                        <img src={cur}  alt=""/>
                        {back}
                    </div>
                </div>
            </Link>
        )
    }
}
export default withRouter(ProfilePhotosModal)