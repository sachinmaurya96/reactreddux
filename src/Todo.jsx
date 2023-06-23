import React, { useState } from 'react'
import { add,remove,removeall } from './actions/Index'
import { useDispatch, useSelector } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({

});

function Todo() {
  const [input, setInput]= useState('')
  const dispatch = useDispatch()

  const list = useSelector((state)=>state.todolist.list)
  console.log(list)
const onKeyPress =(e)=>{
  if(e.key === 'Enter'){
    addTodo()
  }
}

  const addTodo = () =>{
    !input? alert("please enter something") : dispatch(add(input), setInput(''))
  }
  
  return (
    <>
      <div className="container" >
        <div className="todo" data-aos="fade-in">
            <h2>Todo list usng React Redux</h2>
            <h4>Add your todo</h4>
           <div className="form">
           <input type="text" 
           placeholder='Add items'
           value={input}
           onChange={(event)=>setInput(event.target.value)}
           onKeyDown={onKeyPress}
           />
           <button className='addr' onClick={addTodo}>+</button>
           </div>
           <div className="list">
            <ul>
                {
                  list.map((elem)=>{
                   return <li key={elem.id} id={elem.id}>{elem.data}<button className='addr' onClick={()=>dispatch(remove(elem.id))}>-</button></li>
                  })
                }
            </ul>
           </div>
           <button className='btn' onClick={()=>dispatch(removeall())}>Clear</button>
        </div>
      </div>
    </>
  )
}

export default Todo
