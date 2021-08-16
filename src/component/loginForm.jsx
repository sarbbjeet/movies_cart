import React, { Component } from 'react'
import Input from './common/input'


export default class LoginForm extends Component {
    state={
        account:{
            username: "",
            password:""
        },
        errors:[]
    }

handleInput = ({currentTarget:input})=>{
    const account = {...this.state.account}
    //  username and password both    
    account[input.name]= input.value
    this.setState({account})
   // console.log(e.currentTarget.value) 
}

 //handle submit button     
    handleSubmit =e=>{
        e.preventDefault()
        //now validate username and password 
        console.log("username=",this.state.account.username)
        console.log("password=",this.state.account.password)
        const account = {...this.state.account}
        account.username = ""
        account.password =""
        this.setState({account})  //set to empty    
    }


    render(){
        const {username, password }= this.state.account
    return (
        <div>
            <h3>Login Form </h3>
            <form onSubmit={this.handleSubmit}>
               <Input 
                 handleInput={this.handleInput} 
                 name='username' value={username} />
                <Input 
                 handleInput={this.handleInput} 
                 name='password' value={password}
                 type='password' />

                <button className="btn btn-primary mt-3">Login</button>
            </form>
          
        </div>
    )

}}
