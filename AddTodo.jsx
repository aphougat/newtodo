import React,{Component} from 'react'
import {View, TextInput, Button, Stylesheet} from 'react-native'

const AddTodo = ({inputValue, addTodo, updateTodo}) =>
(
  <View>
 <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholdertextcolor="#CACACA"
      selectioncolr="#666666"
      onChangeText={updateTodo}
    />
  <Button title='Save Todo' onPress='{addTodo}' />
  </View>
)

export default AddTodo