
import React, { Component } from "react";

import uuid from 'uuid';
import TodoInput from "./component/TodoInput";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";

class App extends Component {
  render() {
    return(
      <div>
    <div className="container">
      <div className='row'>
     
     <TodoList/>
     <TodoInput />
     <TodoItem />

     </div>
    </div>
    </div>
  );
}
}

export default App;

