import React, { Component } from 'react'
import Input from './common/input'
import Joi from 'joi-browser'
import Form from './common/form'


export default class LoginForm extends Form {
    state={
        data:{
            username: "",
            password:""
        },
        errors:{}
    }

schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password")
}

    doSubmit(){
        //server code 
        console.log("username=",this.state.data.username ) 
        console.log("password=",this.state.data.password ) 
    }
    render(){
        const {username, password }= this.state.data
    return (
        <div>
            <h3>Login Form </h3>
            <form onSubmit={this.handleSubmit}>
               <Input
                 errors= {this.state.errors}  
                 handleInput={this.onChange} 
                 name='username' value={username} />
                <Input 
                 errors= {this.state.errors}  
                 handleInput={this.onChange} 
                 name='password' value={password}
                 type='password' />

                <button className="btn btn-primary mt-3">Login</button>
            </form>          
        </div>
    )

}}
