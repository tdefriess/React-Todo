import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
    todoList: list
  }
}

toggleItem = clickedID => {
  console.log('toggling');
  const newList = this.state.todoList.map(item => {
    if (item.id === clickedID) {      
      return {
        ...item,
        completed: !item.completed        
      };
    } else {
      return item;
    }
  });
  console.log(newList);
  this.setState({
    todoList: newList
  });
};

addNewItem = itemText => {
  const newItem = {
    task: itemText,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todoList: [...this.state.todoList, newItem]
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList 
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
