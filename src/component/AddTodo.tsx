import React, { useState } from 'react'

const AddTodo = () => {

    const [todo, setTodo] = useState("");
    
    const handleTodo=()=>{
        
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleTodo(todo);
        setTodo("")

    }
  return (
    <form onSubmit={handleSubmit()}>
        <input type='text' value={todo}
            onChange={(e)=>e.target.value}
        />
        <button type='submit'>Add todo</button>
    </form>
  )
}

export default AddTodo