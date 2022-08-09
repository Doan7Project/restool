import React, { Component, useState } from 'react';
import "./loginChild.css";


function InputForm(props) {
    const [focused, setFocus] = useState(false);
    const { lable, errorMessage,onChange, id, ...inputProps } = props;
    return (
        <div className='loginForm'>
            <label htmlFor="">{lable}</label>
            <input {...inputProps} onChange={onChange}/>
            <span>{errorMessage}</span>
        </div>
    );
}

export default InputForm;