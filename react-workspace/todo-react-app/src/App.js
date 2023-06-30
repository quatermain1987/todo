import './App.css';
import Todo from './Todo';
import React, { useState, useEffect } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from './AddTodo';
import { call } from './service/ApiService'; // fetch 간소화 ApiService

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => setItems(response.data));
  }, []);


  // const addItem = (item) => {
  //   item.id = "ID-" + items.length; // key를 위한 id
  //   item.done = false; // done 초기화
  //   // 업데이트는 반드시 setItems로 하고 새 배열을 만들어 주어야 한다.
  //   setItems([...items, item]);
  //   console.log("items : ", items);
  // };

  const addItem = (item) => {
    call("/todo", "POST", item)
      .then((response) => setItems(response.data));
  };

  const editItem = () => {
    setItems([...items]);
  };

  // const deleteItem = (item) => {
  //   // 삭제할 아이템을 찾는다.
  //   const newItems = items.filter(e => e.id !== item.id);
  //   // 삭제할 아이템을 제외한 아이템들을 재배열한다.
  //   setItems([...newItems]);
  // };
  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
      .then((response) => setItems(response.data));
  };

  // JSX 코드를 변수에 담는다.
  // 연산자 변수 > items.length > 0 이 false인 경우 그 이후 값을 확인하지 않는다.
  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
