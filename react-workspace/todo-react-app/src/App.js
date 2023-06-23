import './App.css';
import Todo from './Todo';
import React, { useState } from "react";

function App() {
  const [itme, setItem] = useState({
    id: "0",
    title: "title1",
    done: true
  });

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
