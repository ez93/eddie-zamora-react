import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password:"",
            errorText: ""
        };
   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    
   
    handleChange(event){
       this.setState({
           [event.target.name]: event.target.value,
           errorText: ""

       });
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        {withCredentials: true}
     ) .then(Response =>{
         if (Response.data.status === 'created'){
             console.log("Welcome in!")
             this.props.handleSuccessfulAuth();
         } else{
             this.setState({
             errorText: "Try Again!"    
         });  
         this.props.handleUnsuccessfulAuth();
       } 
     })
     .catch(error => {
         this.setState({
             errorText: "An error occurred"
         });
         this.props.handleUnsuccessfulAuth();
     });


        event.preventDefault();
    }
    render() {
        return(
            <div>
                <h1>Login to Access Your Dashboard</h1>
               
                <div>{this.state.errorText}</div>

                <form onSubmit = {this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                    <FontAwesomeIcon icon = "envelope"/>
                    <input 
                    type ="email"
                    name = "email"
                    placeholder = "Your Email"
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    />
                    </div>
                    
                    <div className="form-group">
                    <FontAwesomeIcon icon = "key"/>
                    <input 
                    type ="password"
                    name = "password"
                    placeholder = "Your Password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    />
                    </div>

                        <button className= "btn" type = "submit">Login </button>
                    
                </form>
            </div>
        );
    }
}