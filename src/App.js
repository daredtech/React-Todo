import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoCollection = [];

class App extends React.Component {
  // constructor
  constructor(){
    super();
    this.state = {
      todo_collection: todoCollection
    };
  };

  // when add item is clicked
  addItem = itemName => {
    // create a new item
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    // update the state
    this.setState({
      todo_collection: [...this.state.todo_collection, newItem]
    });
  };

  // to display the components
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       
        <TodoList todo_collection={this.state.todo_collection}/>
        <TodoForm addItem={this.addItem}/>

      </div>
    );
  };
};

export default App;
