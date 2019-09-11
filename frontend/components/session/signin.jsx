import React from "react";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.props.login(this.state)
    }

    render() {
        
        let error = this.props.errors["Credentials"] ? <li className="sign-in-error">Invalid Credentials</li> : ""
        return (
            <div>
            <form className="sign-in">
                <div>
                <label>Email:
                      <br />
                            <input type="text" value={this.state.email} autoComplete="email" onChange={this.handleInput("email")} />
                </label>
              
                </div>
                <div>
                <label>Password:
                     <br />
                            <input type="password" value={this.state.password} autoComplete="current-password" onChange={this.handleInput("password")} />
                </label>
                </div>
                <div className="sign-in-button">
                <button onClick={this.handleSubmit}>Log In</button>
                </div>
            </form>
            {error}
            </div>
        )
    }
}