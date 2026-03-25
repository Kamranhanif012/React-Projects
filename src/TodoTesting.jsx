import {useState} from 'react'
import './TodoTesting.css'

function todoApp(){
        
    const [inputValue, setInputvalue] = useState('')
    const [todo, setTodo] = useState([{id: 1, Name: 'Wake up at 6:30 AM', completed: false}])

    function handleSubmit(e){
        e.preventDefault()

        if(inputValue.trim()){
            const addtodo = {
                id: Math.random(),
                Name: inputValue,
                completed: false
            }
            setTodo([...todo, addtodo])
            setInputvalue('')
        }
    }

    const toggleCompleted= (key)=>{
        const updatetodos =todo.map(todos => todos.id===key? {...todos, completed: !todos.completed}: todos
        )
        setTodo(updatetodos)
    }

    const deleteTodos = (key)=>{
       const removedTodo= todo.filter((todos)=> todos.id !==key)
         setTodo(removedTodo)
    } 
    
    const completedtodos = todo.filter((todos) => todos.completed).length
    

    
    return(
        <div className="todo-container">
        <div className="app-header">
            <h1>📝 Todo List App</h1>
            <p>Keep track of your daily tasks and stay productive. Add your todos, mark them as complete, and remove them when done!</p>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            onChange={(e) => {setInputvalue(e.target.value)}}
            value={inputValue}
            />
            <button type='submit'>Submit</button>
        </form>
        <div className="todo-list">
            {todo.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-emoji">✨</div>
                    <p>No todos yet! Add one to get started</p>
                </div>
            ) : (
            todo.map((key) =>{
               return(
                <div className="todo-item" key={key.id}>
                    <input type="checkbox"
                    checked={key.completed}
                    onChange={()=>{toggleCompleted(key.id)}}
                />
                    <ul>
                        <li>
                            {key.Name}
                        </li>
                    </ul>
                    <button className="remove-btn" onClick={()=> deleteTodos(key.id)}>Remove</button>
                </div>
               ) 
            })
            )}
            <p className="completed-count">✅ Completed Tasks: {completedtodos}</p>

            </div>
        </div>

        
        )
}
export default todoApp