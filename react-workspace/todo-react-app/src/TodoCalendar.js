// import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

const TodoCalendar = () => {
    // const [value, onChange] = useState(new Date());

    return (
        <div id="Calendar">
            <Calendar  />
        </div>
    );
    // onclick > calendar day click!!
}

export default TodoCalendar;