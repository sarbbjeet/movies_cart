import React, { Component } from 'react'
import Input from './common/input'
import Joi from 'joi-browser'


export default class LoginForm extends Component {
    state={
        account:{
            username: "",
            password:""
        },
        errors:{}
    }

schema = {
    username: Joi.string().required().email(),
    password: Joi.string().required()
}

//validate username and password before sending to  database 
//validate using joi 
validate = ()=>{
 const errors = {}
 const account = {...this.state.account}
 const abortE= {abortEarly:false}  //record all validate errors
 const {error} = Joi.validate(account,this.schema,abortE)
 if(!error) return null
 console.log(error.details)
 for(let item in error.details)
   errors[error.details[item].path[0]] = item.message  //item.path[0]  //key word(username or password)  
 return errors
} 
  
//validate single input 
validateProperity = ({name,value})=>{
    const obj = {[name]: value}   //create single object
    const schema = {[name]: this.schema[name]}
    const {error} = Joi.validate(obj,schema)
    if(!error) return null
    return error.details[0].message      
}

onChange = ({currentTarget:input})=>{
    const account = {...this.state.account}
    const errorMessage = this.validateProperity(input)
    const errors={}
    if(errorMessage) errors[input.name]= errorMessage
    else delete errors[input.name]

    
    account[input.name]= input.value
    this.setState({account,errors}) //set username and password to state object
}

 //handle submit button     
    handleSubmit =e=>{
        e.preventDefault()  //prevent default reload page(prevent default dehavior of form) 
        const errors = this.validate()
        this.setState({errors: errors || {}})  //if errors save errors else save {}
        if(errors) return
        console.log("username=",this.state.account.username ) 
        console.log("password=",this.state.account.password ) 
        //write server code here   
      
    }
    render(){
        const {username, password }= this.state.account
    return (
        <div>
            <h3>Login Form </h3>
            <form onSubmit={this.handleSubmit}>
               <Input 
                 handleInput={this.onChange} 
                 name='username' value={username} />
                <Input 
                 handleInput={this.onChange} 
                 name='password' value={password}
                 type='password' />

                <button className="btn btn-primary mt-3">Login</button>
            </form>          
        </div>
    )

}}
