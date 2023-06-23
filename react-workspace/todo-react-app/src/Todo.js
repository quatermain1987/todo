import React, { useState } from "react";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);

    return (
        <div className="Todo">
            <input 
                type="checkbox" 
                id={item.id} 
                name={item.name} 
                checked={item.done} 
            />
            <label id={item.id}>{item.title}</label>
        </div>
    )
}

export default Todo;
