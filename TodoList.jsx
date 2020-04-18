import React,{Component} from 'react'
import {ScrollView, Stylesheet} from 'react-native'
import {Todo} from './ToDo.jsx'

const TodoList = ({todolist, deletetodo, toggletodo}) =>
(
  <ScrollView>
  {todolist.map(
    todo => <Todo 
    todo={todo} 
    key={todo.index}
    deletetodo={() => deletetodo(todo.index)} 
    toggletodo={() => toggletodo(todo)}/> )}
  </ScrollView>
)

export default TodoList