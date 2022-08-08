import React, { PureComponent, useState } from 'react';
import './insertDataChild.css';
function InsertDataChild(props) {
    const [focused,setFocus] = useState(false);
    const {lable, onChange, id, ...inputProps} = props;
    const handleFocus = (e) =>{

        setFocus(true);
    };
    return (
        <div className='inserDataChild'>
            <label htmlFor="">{lable}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>

        </div>

    );
}

export default InsertDataChild;