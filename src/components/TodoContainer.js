import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoContainer = () => {
    // const [ruta, setRuta] = useState("todos");
    const [vector, setVector] = useState([]);
    useEffect( () => {
        const promesa = axios(`https://todos-academlo.herokuapp.com/api/todos`);
        promesa
            .then(data => {
             console.log(data.data)
             setVector(data.data.todos)
             
        });
    },[]);

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Student</th>
                    <th>Complete</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    vector.length > 0? (vector.map((todo) => (
                        <tr key={todo._id}>
                            <td>{todo.student}</td>
                            <td>{todo.task}</td>
                            <td>{todo.isCompleted? "yes":"no"}</td>
                            <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )                        
                }
            </tbody>
        </table>
     );
}
 
export default TodoContainer;