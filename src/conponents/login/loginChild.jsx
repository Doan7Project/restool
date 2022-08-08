import React, { Component, useState } from 'react';
import "./loginChild.css";


function InputForm(props) {
    const [focused, setFocus] = useState(false);

    const { lable, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {

        setFocus(true);
    };
    return (
        <div className='loginForm'>

            <label htmlFor="">{lable}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString( ) }/>
            <span>{errorMessage}</span>

        </div>
    );
}

export default InputForm;