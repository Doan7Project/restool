import React, { Component } from 'react';
import { useState } from 'react';
import InputForm from './loginChild';
import "./login.css";

function Login() {
    const [values, setValues] = useState({

        username: "",
        password: ""

    });
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
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    console.log(values);
    return (
        <div className='LoginS'>

            <form onSubmit={handleSubmit}>
             
                <div className='LoginContent'>
                    <h6>CONFIRMATION DATABASE</h6>
                </div>
                <div className='circleDeg'>

</div>
                <h1>Login</h1>
                {input.map((input) =>
                    <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                )}
                <button>login</button>
            </form>
        </div>
    );
}

export default Login;


