import Joi from 'joi-browser'
import { login } from '../services/authService.js'
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
    doSubmit = async()=>{
        //server code
        try{
            const {data,headers}= await login(this.state.data.username,
                this.state.data.password)
            localStorage.setItem('token', headers['x-auth-token'])
            window.location='/'  //mount all components again
            //this.props.history.push('/')  //home page
            

        } 
        catch(ex){
            if(ex.response && ex.response.status===400){
                const errors = {...this.state.errors}
                errors.username = ex.response.data.message
                this.setState({errors})
            }
        }
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
