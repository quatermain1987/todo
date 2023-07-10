import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

const TodoCalendar = (props) => {

    const [item, setItem] = useState(props.item);
    const editItem = props.editItem;
    const closeModal = props.closeModal;

    const editEventHandler = (value) => {
        item.date = value;
        editItem(item);
        setItem({ ...item, date: value });
        closeModal();
    };

    return (
        <div>
            <Calendar onClickDay={editEventHandler} value={item.date}/>
        </div>
    );

}

export default TodoCalendar;