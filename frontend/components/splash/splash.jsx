import React from 'react'
import SignInContainer from '../session/signin_container'
import SignUpContainer from '../session/signup_container'
export default class Splash extends React.Component {
    constructor(props) {
        super(props)
    }
/**
* Renders the splash page
*/
    render(){
        return(
            <div>
            <div className="splash">
                <div className="nav-bar">
                </div>
                <div className="sign-up-main">
                    <SignUpContainer />
                </div>
            </div>
            <div className="footer">
                <footer>
                </footer>
            </div>
            </div>
        )
    }
}