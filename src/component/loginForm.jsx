import Joi from 'joi-browser'
import Form from './common/form.jsx'


export default class LoginForm extends Form {
    state={
        data:{
            username: "",
            password:"",
            // name:''
        },
        errors:{}
    }

schema = {
    // name: Joi.string().required().label("Name").min(5).max(255),
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password")
}

    doSubmit(){
        //server code 
        console.log("data=",this.state.data) 
    }
    render(){
    return (
        <div>
            <h3>Login Form </h3>
            <form onSubmit={this.handleSubmit}>
            {/* {this.renderInput('name', 'Name') } */}
                {/* name, label arguments of renderInput */}
             {this.renderInput('username', 'Username') }
                {/* name, label,type arguments of renderInput */}
             {this.renderInput('password', 'Password','password') } 
             {this.renderButton('Login')}
            </form>          
        </div>
    )

}}
