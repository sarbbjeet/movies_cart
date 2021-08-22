import React, { Component } from 'react'
import Joi from 'joi-browser'

//all loginform functions are decleared here to reuse in other components 
export default class Form extends Component {
    //validate username and password before sending to  database 
    //validate using joi 
    validate = () => {
        const errors = {}
        const data = {...this.state.data } //data means username and password
        const abortE = { abortEarly: false } //record all validate errors
        const { error } = Joi.validate(data, this.schema, abortE)
        if (!error) return null
        console.log(error.details)
        for (let item in error.details)
            errors[error.details[item].path[0]] = item.message //item.path[0]  //key word(username or password)  
        return errors
    }

    //validate single input 
    validateProperity = ({ name, value }) => {
            // const emailReg = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            // if((value.trim()==='') || (!value.trim().match(emailReg)))
            //   return 'Username is not valid'
            // return null  
            const obj = {
                    [name]: value
                } //create single object
            const schema = {
                [name]: this.schema[name]
            }
            const { error } = Joi.validate(obj, schema)
            if (!error) return null
            return error.details[0].message
        }
        //any changes in the input field 
    onChange = ({ currentTarget: input }) => {
        const data = {...this.state.data }
        const errorMessage = this.validateProperity(input)
        const errors = {}
        if (errorMessage) errors[input.name] = errorMessage
            // else delete errors[input.name]

        data[input.name] = input.value
        this.setState({ data, errors }) //set username and password to state object
    }

    //handle submit button     
    handleSubmit = e => {
        e.preventDefault() //prevent default reload page(prevent default dehavior of form) 
        const errors = this.validate()
        this.setState({ errors: errors || {} }) //if errors save errors else save {}
        if (errors) return
            //write server code here   
        this.doSubmit()
    }


}