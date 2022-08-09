import React, { Component } from 'react';
import { useState } from 'react';
import InputForm from './loginChild';
import "./login.css";

function Login() {

    const adminUser = {

        username: "doananhphamuk@gmail.com",
        password: "doan080912"
    }
    const [values, setValues] = useState({

        username: "",
        password: ""

    });
    const [error, setError] = useState("")

    const Login = values => {
        if(values.username == adminUser.username && values.password ==adminUser.password ){
         setValues({
            username:values.username,
            password:values.password
         })
         setError("")
        }
        else{
            setError("Details not mark");
        }
    }

    const input = [{
        id: 1,
        name: "username",
        type: "email",
        placeholder: "Email address",
        errorMessage: "Your Email should be correct format",
        lable: "Username",
        required: true
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Your Password should be not empty",
        lable: "Password",
        required: true
    }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.target);
        Login(values);
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      
    }
    return (
        <div className='LoginS'>
            <form onSubmit={handleSubmit}>
                <div className='LoginContent'>
                    <h6>CONFIRMATION DATABASE</h6>
                </div>
                <h1>Login</h1>
                {input.map((input) =>
                    <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                )}
                {(error !="") ? (<div className='error'>{error}</div>):""}
                <button>login</button>
            </form>
        </div>
    );
}

export default Login;


