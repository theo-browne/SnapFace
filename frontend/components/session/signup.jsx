import React from "react";
import SignInContainer from './signin_container'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(str) {
        return (e) => {
            this.setState({ [str]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {
            name: `${this.state.firstName.toLowerCase()} ${this.state.lastName.toLowerCase()}`,
            email: this.state.email,
            password: this.state.password
        }
        this.props.createUser(user)
    }

    render() {
        return (
            <div className="splash-sign-up">
                

                <div className="splash-sign-up-left" >
                    <img className="icon" src="https://image.flaticon.com/icons/svg/864/864685.svg" alt=""/>
                    <img src="https://www.sportscasting.com/wp-content/uploads/2019/08/Bill-Belichick-Madden-2-GettyImages-1030030996.jpg" alt=""/>
                    <p>Welcome to SnapFace! The unofficial and unaffiliated social media site of New England Patriots' Head Coach Bill Belichick</p>
                </div>
                <div className="auth-forms">
                    <SignInContainer />
                    <h2>Create a New Account</h2>
            <form className="auth-form">
                
                    <div className="sign-in-names">
                    <input type="text" value={this.state.firstName} placeholder="First Name" onChange={this.handleInput("firstName")} />
                    <input type="text" value={this.state.lastName} placeholder="Last Name" onChange={this.handleInput("lastName")} />
                    </div>
                    <br />
                
                     <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput("email")} />
       
                    <br />
                
                    <input type="text" value={this.state.password} placeholder="Password" onChange={this.handleInput("password")} />
                   <br/>
                <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
            </div>
                <div className="splash-sign-up-right" >

                </div>
            </div>
        )
    }
}