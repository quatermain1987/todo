import React, { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

// todoList를 추가할 AddTodo Component
const AddTodo = (props) => {
    // 사용자의 입력을 저정할 오브젝트
    const [item, setItem] = useState({ title: "" });
    const addItem = props.addItem;

    // onInputChange function
    const onInputChange = (e) => {
        setItem({ title: e.target.value });
        console.log(item);
    };

    // onButtonClick function
    const onButtonClick = () => {
        item.date = new Date();
        addItem(item);
        setItem({ title: "" }); // 리스트 생성 후 인풋박스 초기화
    };

    // enterKeyEventHandler function
    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    };

    // onInputeChange 함수 TextField에 연결
    return (
        <Grid container style={{ marginTop: 20 }}>
            <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                <TextField placeholder="Add Todo here" fullWidth
                    onChange={onInputChange}
                    onKeyPress={enterKeyEventHandler}
                    value={item.title} />
            </Grid>
            <Grid xs={1} md={1} item >
                <Button fullWidth style={{ height: '100%' }} color="secondary" variant="outlined"
                    onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;