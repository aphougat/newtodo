import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Button, View} from 'react-native';
import {TodoList} from './TodoList.jsx'
import {AddTodo} from './AddTodo.jsx'

type Props = {};

let index = 0;
export default class MyApp extends Component<Props> {
  
  constructor()
  {
    super();
    this.state = {
      inputValue: '',
      todolist: []
    };
    this.deletetodo = this.deletetodo.bind(this)
    this.toggletodo = this.toggletodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }
  
  deletetodo(index){
    this.setState({
      todolist: this.state.todolist.filter(todo => todo.index != index)
    })
  }
  
  toggletodo(todo)
  {
     
  }
  
  updateTodo(inputValue)
  {
    this.setState({
      inputValue: inputValue
    })
  }
  
  addTodo()
  {
    let incrementalindex = index + 1;
    this.setState({
      todolist: [...this.state.todolist, {
        text: this.state.inputValue,
        complete: false,
        index: incrementalindex
      }],
      todo: ''
    })
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <AddTodo inputValue={this.state.inputValue} addTodo={this.addTodo} updateTodo={this.updateTodo} />
        <TodoList todolist={this.state.todolist} deletetodo={this.deletetodo} toggletodo={this.toggletodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'Chapter1', () => MyApp
);
