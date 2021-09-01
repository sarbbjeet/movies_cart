import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "../common/select";

//all loginform functions are decleared here to reuse in other components
export default class Form extends Component {
  renderInput(name, label, type = "text") {
    //by default type is text
    return (
      <Input
        errors={this.state.errors}
        onChange={this.onChange}
        name={name}
        label={label}
        type={type}
        // style1 = {{color:'red'}}
        value={this.state.data[name]}
      />
    );
  }

  renderSelect(name, label, type = "text") {
    return (
      <Select
        name={name}
        label={label}
        value={this.state.data.genreId}
        options={this.state.genres}
        onChange={this.onChange}
        errors={this.state.errors}
      ></Select>
    );
  }
  renderButton(label) {
    return (
      <button
        // button is disabled if wrorng username and password
        disabled={this.validate()}
        className="btn btn-primary mt-2"
      >
        {label}
      </button>
    );
  }
  //validate username and password before sending to  database
  //validate using joi
  validate = () => {
    const errors = {};
    const data = { ...this.state.data }; //data means username and password
    if (data._id === "") data._id = "abc"; //set default to bypass _id validation
    const abortE = { abortEarly: false }; //record all validate errors
    const { error } = Joi.validate(data, this.schema, abortE);
    if (!error) return null;
    for (let item in error.details)
      errors[error.details[item].path[0]] = item.message; //item.path[0]  //key word(username or password)
    return errors;
  };

  //validate single input
  validateProperity = ({ name, value }) => {
    // const emailReg = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
    // if((value.trim()==='') || (!value.trim().match(emailReg)))
    //   return 'Username is not valid'
    // return null
    const obj = {
      [name]: value,
    }; //create single object
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };
  //any changes in the input field
  onChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errorMessage = this.validateProperity(input);
    const errors = {};
    if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name]
    data[input.name] = input.value;
    this.setState({ data, errors }); //set username and password to state object
  };

  //handle submit button
  handleSubmit = (e) => {
    e.preventDefault(); //prevent default reload page(prevent default dehavior of form)
    const errors = this.validate();
    this.setState({ errors: errors || {} }); //if errors save errors else save {}
    if (errors) return;
    //write server code here
    this.doSubmit();
  };
}
