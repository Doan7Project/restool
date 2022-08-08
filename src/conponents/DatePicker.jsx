import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function DatePickerTime() {
    const [startDate, setstartDate] = useState(null);

 
    return (
        <div>
            <DatePicker
                onChange={date => setstartDate(date)}
                selected={startDate}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                placeholderText="Select Date"
                className='border border-success rounded px-2 py-1 w-100'
                id="checkin"
                />
        </div>

    );
}

export default DatePickerTime;