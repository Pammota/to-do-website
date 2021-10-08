import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


const TodoList = ()=> {

    const[todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){//checks if form is empty or filled with spaces
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        //console.log(...todos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){//checks if form is empty or filled with spaces
            return;
        }

        setTodos(prev => prev.map(item =>(item.id===todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removedArr =[...todos].filter(todo =>todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>What's the plan?</h1>
            <TodoForm onSubmit={ addTodo } />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    );
}

export default TodoList
