import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

const TodoCalendar = (props) => {

    const [item, setItem] = useState(props.item);
    const editItem = props.editItem;

    const editEventHandler = (e) => {
        item.date = e.target.value;
        editItem(item);
        setItem({ ...item, date: e.target.value });
        let event = document.getElementById(item.id);
        event.style.display = ((event.style.display !== 'none') ? 'none' : 'block');
    };

    return (
        <div>
            <Calendar onChange={editEventHandler} value={item.date} />
        </div>
    );

}

export default TodoCalendar;