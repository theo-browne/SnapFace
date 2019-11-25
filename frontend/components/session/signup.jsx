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
        this.demoLogin = this.demoLogin.bind(this)
    }

/**
* Creates an account for a demo user. Random email string used to limit the probablity of the 
same email being used more than once
* @param {event} e - The submit event triggered by clicking the Demo Login button.
*/
    demoLogin(e){
        e.preventDefault()
        let email = String(Math.random())
        
        const demoUser = {
            name: "Demo User",
            email,
            password: "123456"
        }
        this.props.createUser(demoUser)

        
    }

/**
* Handles input on the Sign up form
* @param {string} str - A string indicating which field the user is typing in and which part of state is being modified
* @param {event} e - The change event triggered by a user typing in an input field in the sign up form
*/
    handleInput(str) {
        return (e) => {
            this.setState({ [str]: e.target.value })
        }
    }
/**
* Submits the create account request. Name is stored in lower case as this is how it is stored in the database.
* @param {event} e - The submit event triggered by clicking the Sign Up button.
*/
    handleSubmit(e) {
        e.preventDefault()
        const user = {
            name: `${this.state.firstName.toLowerCase()} ${this.state.lastName.toLowerCase()}`,
            email: this.state.email,
            password: this.state.password
        }
        this.props.createUser(user)
    }

/**
* Renders the signup form, and any errors caused by an invalid signup attempt
*/
    render() {
        let nameId = this.props.errors["Name"] ? "error" : "input"
        let emailId = this.props.errors["Email"] ? "error" : "input"
        let passwordId = this.props.errors["Password"] ? "error" : "input"
        let nameError = this.props.errors["Name"] 
        let emailError = this.props.errors["Email"] 
        let passwordError = this.props.errors["Password"] 
  
        return (
            <div className="splash-sign-up">
                <div className="splash-sign-up-content">
                <div className="splash-sign-up-left" >
                    <img className="icon" src="https://image.flaticon.com/icons/svg/864/864685.svg" alt=""/>
                        <img src="https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
                </div>
                <div className="auth-forms">
                    <SignInContainer />
                    <h2 className="signup-header">Create a New Account</h2>
            <form className="auth-form">
                    <div className="sign-in-names" >

                                <input type="text" className={nameId} value={this.state.firstName} 
                                placeholder="First Name" autoComplete="given-name" 
                                onChange={this.handleInput("firstName")} />

                                <input type="text" className={nameId} value={this.state.lastName} 
                                placeholder="Last Name" autoComplete="family-name" 
                                onChange={this.handleInput("lastName")} />

                            <li>{nameError}</li>
                    </div>

                            <input type="text" className={emailId} value={this.state.email} 
                            placeholder="Email" autoComplete="email" 
                            onChange={this.handleInput("email")} />
                            <li>{emailError}</li>

                            <input type="password" className={passwordId} value={this.state.password} 
                            autoComplete="new-password" placeholder="New Password" 
                            onChange={this.handleInput("password")} />

                            <li>{passwordError}</li>
                   <div className="sign-up-button">
                <button onClick={this.handleSubmit}>Sign Up</button>
                <button id="demo-login" onClick={this.demoLogin}> Demo Login</button>
                 </div>
            </form>
            </div>
                </div>
            </div>
        )
    }
}