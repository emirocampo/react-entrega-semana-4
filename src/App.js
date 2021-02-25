import React from 'react';
import CreateTodo from "./components/CreateTodo";
import TodoContainer from "./components/TodoContainer";

function App() {

  return (
    <div className="container">
      <h1>CRUD App ToDo</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add ToDo</h2>
          <CreateTodo />
        </div>
        <div className="flex-large">
          <h2>View ToDo</h2>
          <TodoContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
