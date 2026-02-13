import React, {useState, useRef} from 'react'
import "./styles/TodoList.css"
import TodoListItem from './TodoListItem'

const mockData=[
  {
    id:0,
    isDone:false,
    content:"react 공부하기",
    date:new Date().getTime()
  },
  {
    id:1,
    isDone:false,
    content:"빨래하기",
    date:new Date().getTime()
  },
  {
    id:2,
    isDone:false,
    content:"노래연습하기",
    date:new Date().getTime()
  }
]

const TodoList = () => {
    const [todos, setTodos] = useState(mockData)
    const idRef = useRef(3)

    const onCreate=(content)=>{
        const newTodo={
        id:idRef.current++,
        isDone:false,
        content:content,
        }

        setTodos([newTodo,...todos])
    }

    const onSubmit=()=> {
        if(content=='') {
            inputRef.current.focus()
            return
        }
        onCreate(content)
        setContent("")
    }


    return (
        <section className='todolist'>
            <div className="inner">
                <div className="search-wrap">
                    <input type="text" placeholder='검색어를 입력하시오'/>
                    <button>추가</button>
                </div>
                <div className="list">                  
                    {todos.map((t)=>(
                        <TodoListItem key={t.id} todos={todos}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TodoList