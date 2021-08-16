import React, { Component } from 'react'

export default class LoginForm extends Component {
    state={
        account:{
            username: "",
            password:""
        }
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
                <div className="mb-2">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input name="username" onChange={this.handleInput} value={username} style={{maxWidth:'300px'}} id="username" className="form-control" type="text" /></div>
                <div className="mb-2">  
                    <label className="form-label" htmlFor="password">Password</label>
                    <input name="password" onChange={this.handleInput} value={password} type="password" style={{maxWidth:'300px'}} className="form-control" id="password"/>
                </div>
                <button className="btn btn-primary mt-3">Login</button>
            </form>
          
        </div>
    )

}}
