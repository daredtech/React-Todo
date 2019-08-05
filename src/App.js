import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./styles.css";


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

// when toggled
  toggleItem = id => {
    console.log(id);
    // find the item that was toggled, update its state
    this.setState({
      todo_collection: this.state.todo_collection.map(item => {
        if (item.id === id) {
          return {
            // copy the rest of the vields but the one we need to change
            ...item,
            //change the completed status
            completed: !item.completed
          };
        // if not a matching item, do nothing
        } else {
          return item;
        }
      })
    });
  };

  // to clear the list
  clearItems = (event) =>{
    event.preventDefault();

    this.setState({
      // todo_collection: todoCollection
      todo_collection: this.state.todo_collection.filter(item => !item.completed)
    })
  }


  // to display the components
  render() {
    return (
      <div className='my-app'>
        <h2>Welcome to your Todo App!</h2>
       
        <TodoList todo_collection={this.state.todo_collection} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} clearItems={this.clearItems} todoCollection={todoCollection}/>

      </div>
    );
  };
};

export default App;
