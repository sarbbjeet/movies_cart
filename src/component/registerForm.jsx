import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";
import { register } from "../services/userService";
import { toast } from "react-toastify";
import auth from "../services/authService";

export default class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().required(),
    username: Joi.string().email().required(),
    password: Joi.string().required(),
  };
  //get call from form module
  doSubmit = async () => {
    //post request
    try {
      const { headers } = await register(this.state.data);
      //save token to chrome local database
      auth.saveToken(headers["x-auth-token"]); //save token to chrome database

      toast.info("successfully account is created");
      window.location = "/"; //move to root
      //   this.props.history.push('/') //move to home page
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.message;
        this.setState({ errors });
      }
    }
    //   console.log('before request data= ', this.state.data)
    //   const k =await register(this.state.data)
    //   console.log("received call ..", k)
  };
  render() {
    return (
      <div className="formContainer">
        <div>
          <h3>Create an account</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("username", "Username", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("signup")}
          </form>
        </div>
      </div>
    );
  }
}
