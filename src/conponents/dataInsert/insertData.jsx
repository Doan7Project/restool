import React, { Component } from 'react';
import { useState } from 'react';
import InsertDataChild from './insertDataChild';
import './insertData.css'
function InsertData() {
    const [values, setValues] = useState({
        bookingid: "",
        companyname: "",
        guestname: "",
        nationality: "",
    })
    const input = [{
        id: 1,
        name: "bookingid",
        type: "text",
        placeholder: "Booking ID",
        lable: "Booking ID",
        required: true
    },
    {
        id: 2,
        name: "companyname",
        type: "text",
        placeholder: "Company Name",
        lable: "Company Name",
        required: true
    }
        , {
        id: 3,
        name: "guestname",
        type: "text",
        placeholder: "Guest Name",
        lable: "Guest Name",
        required: true
    },
    {
        id: 4,
        name: "nationality",
        type: "text",
        placeholder: "Nationality",
        lable: "Nationality",
        required: true
    }
    ]
    const handlesubmit = (e) => {

        e.preventDefault();
        const data = new FormData(e.target);
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    console.log(values);
    return (
        <div className='insertData'>
            <form action="" onSubmit={handlesubmit}>
                {input.map((input) =>
                    <InsertDataChild key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                )}
                    <button>Submit</button>
            </form>

        
        </div>

    );
}

export default InsertData;