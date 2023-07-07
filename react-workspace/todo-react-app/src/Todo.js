import React, { useState } from "react";
import {
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton,
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import CalendarMonth from "@mui/icons-material/CalendarMonth";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    // deleteEventHandler
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    // editEventHandler
    const editEventHandler = (e) => {
        setItem({ ...item, title: e.target.value });
    };

    const turnOffReadOnly = () => {
        setReadOnly(false);
        console.log('turnOffReadOnly');
    };

    const turnOnReadOnly = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true);
        }
        console.log('turnOffReadOnly');
        // readOnly로 바뀌는 순간 http전송
        editItem(item);

    };

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
        // console.log(item.done);
    }

    const calendarEventHandler = (e) => {
        


        setItem({ ...item, date: e.target.value });
    }

    return (
        <ListItem>
            <Checkbox checked={item.done}
                onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly: readOnly
                    }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Calendar"
                    onChange={editEventHandler}
                    onClick={calendarEventHandler}>
                    <CalendarMonth />
                </IconButton>
                <IconButton aria-label="Delete Todo"
                    onClick={deleteEventHandler} >
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;
