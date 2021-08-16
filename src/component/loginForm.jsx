import React, { Component } from 'react'

export default class LoginForm extends Component {
    state={
        account:{
            username: "",
            password:""
        }
    }
    
    handleSubmit =e=>{
        e.preventDefault()
        console.log("login button pressed")
    }
    render(){
    return (
        <div>
            <h3>Login Form </h3>

            <form onSubmit={this.handleSubmit}>
                <div className="mb-2">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input style={{maxWidth:'300px'}} id="username" className="form-control" type="text" /></div>
                <div className="mb-2">  
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" style={{maxWidth:'300px'}} className="form-control" id="password"/>
                </div>
                <button className="btn btn-primary mt-3">Login</button>
            </form>
          
        </div>
    )

}}
