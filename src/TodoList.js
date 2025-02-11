// import React, { useState } from 'react';
// import Todo from './Todo';
// import './TodoList.css';  

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const addTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//       setNewTodo('');
//     }
//   };

//   const toggleComplete = (id) => {
//     setTodos(todos.map(todo => 
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="todo-list">
//       <h1>TODO LIST</h1>
//       <input 
//         type="text" 
//         value={newTodo} 
//         onChange={(e) => setNewTodo(e.target.value)} 
//         placeholder="Add a task here........."
//       />
//       <button onClick={addTodo}>Add Task</button>
//       <div className="todos">
//         {todos.map(todo => (
//           <Todo 
//             key={todo.id} 
//             todo={todo} 
//             toggleComplete={toggleComplete} 
//             deleteTodo={deleteTodo} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TodoList;


