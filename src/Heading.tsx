import React, { useState } from 'react'

export const Heading = () => {
    const [todo, setTodo] = useState("")
    const handleTodo=()=>{
        setTodo("")
    }
  return (
    <div>Add to do logic
    <button onClick={()=>{handleTodo()}}>

    </button>
    </div>

)
}
