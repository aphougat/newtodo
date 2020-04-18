import React,{Component} from 'react'
import {View, Text, Button, Stylesheet} from 'react-native'

const Todo = ({todo, deletetodo, toggletodo}) =>
(
  <View>
  <Text>{todo.text}</Text>
  <Button title='Delete' onPress='deletetodo' />
  <Button title='ToggleStatus' onPress='toggletodo' />
  </View>
)

export default Todo