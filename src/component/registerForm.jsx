import  Joi from 'joi-browser'
import React from 'react'
import Form from './common/form'
import {register} from '../services/userService'
import { toast } from "react-toastify";
import { saveToken } from '../services/authService';

export default class RegisterForm extends Form {
    state={
        data:{
            name:"",
            username: "",
            password: ""
        },
        errors: {}
    }
    schema ={
        name: Joi.string().required(),
        username: Joi.string().email().required(),
        password: Joi.string().required()
    }
    //get call from form module
     doSubmit = async()=>{
      //post request
      try{
          const {headers} = await register(this.state.data)
          //save token to chrome local database
           saveToken(headers['x-auth-token']) //save token to chrome database
         
          toast.info('successfully account is created')
        //   this.props.history.push('/') //move to home page
           
      }
      catch(ex){
          if((ex.response) && (ex.response.status === 400)){
              const errors = {...this.state.errors}
              errors.username= ex.response.data.message
              this.setState({errors})
          }
      }
    //   console.log('before request data= ', this.state.data)
    //   const k =await register(this.state.data)
    //   console.log("received call ..", k)
     }
    render() {
        return (
            <React.Fragment>
            <h3>Create an account</h3>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('name', 'Name')}
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton('signup')}
            </form>
            </React.Fragment>
        )
    }
}
