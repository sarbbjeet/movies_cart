import React, { Component } from 'react'
import Input from './common/input'


export default class LoginForm extends Component {
    state={
        account:{
            username: "",
            password:""
        },
        errors:{}
    }

//validate username and password before sending to  database 
//basic validation 
validate = ()=>{
  const errors ={}
  const {account} = this.state
  if(account.username.trim()==='') 
   errors.username='username is required'
  if(account.password.trim()==='')
    errors.password = 'password is required'
  return Object.keys(errors).length ? errors : {}         
}   

//validate single input 
validateProperity = (input)=>{
    const errors ={}
    const {account}= {...this.state}
    if(account[input.name].trim()==='' || account[input.name].trim().length<6)
       errors[input.name] = `${input.name} is required`
    return Object.keys(errors).length ===0 ?  {}  : errors        
}

handleInput = ({currentTarget:input})=>{
    const account = {...this.state.account}
    const errors = this.validateProperity(input)
    this.setState({errors})
    console.log(this.state.errors)
       
    account[input.name]= input.value
    this.setState({account})
    //}
   // console.log(e.currentTarget.value) 
}

 //handle submit button     
    handleSubmit =e=>{
        e.preventDefault()
        const errors = this.validate()
        this.setState({errors})
        //now validate username and password 
        console.log("username=",this.state.account.username)
        console.log("password=",this.state.account.password)
        console.log("error1=", this.state.errors)
        console.log("error2=",   errors)
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
