import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  Paper,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import AddTodo from "./AddTodo";
import { call, signout } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      });
  }, []);


  /* frontend 독립 실행 코드
    const addItem = (item) => {
      item.id = "ID-" + items.length; // key를 위한 id
      item.done = false; // done 초기화
      // 업데이트는 반드시 setItems로 하고 새 배열을 만들어 주어야 한다.
      setItems([...items, item]);
      console.log("items : ", items);
    };
    const editItem = () => {
      setItems([...items]);
    };
    const deleteItem = (item) => {
      // 삭제할 아이템을 찾는다.
      const newItems = items.filter(e => e.id !== item.id);
      // 삭제할 아이템을 제외한 아이템들을 재배열한다.
      setItems([...newItems]);
    };
  */

  const addItem = (item) => {
    call("/todo", "POST", item)
      .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then((response) => setItems(response.data));
  };

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

  // navigationBar 추가
  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">TodoList</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" raised="true" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  /* 로딩중이 아닐 때 렌더링 할 부분 */
  let todoListPage = (
    <div>
      {navigationBar} {/* 네비게이션 바 렌더링 */}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );

  /* 로딩중일 때 렌더링 할 부분 */
  let loadingPage = <h1> Loading.. </h1>;
  let content = loadingPage;

  if (!loading) {
    /* 로딩중이 아니면 todoListPage를 선택*/
    content = todoListPage;
  }

  /* 선택한 content 렌더링 */
  return <div className="App">{content}</div>;
}

export default App;
