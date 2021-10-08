import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {

  	const [input, setInput] = useState(props.edit ? props.edit.value : '');

	const inputRef = useRef(null);

	useEffect( () => {
		inputRef.current.focus();
		console.log('yo');
	});

	const handleChange = e => {
		setInput(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random()*10000),
			text: input
		});
		
		setInput("");
	}

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
				{props.edit ? (
					<>
					<input type="text" 
          placeholder="Update your item" 
          value={input}
          name="text" 
          className="todo-input"
					onChange={handleChange}
					ref={inputRef}
					/>
        <button className="todo-button">Update</button></>): 
				(
					<>
					<input type="text" 
          placeholder="Add todo" 
          value={input}
          name="text" 
          className="todo-input"
					onChange={handleChange}
					ref={inputRef}
				/>
        <button className="todo-button">Add todo</button>
				</>
				)}
        
      </form>
    </div>
    )
}

export default TodoForm;
