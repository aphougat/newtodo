import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const AddTodo = ({inputValue, addTodo, updateTodo}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholdertextcolor="#CACACA"
      selectioncolr="#666666"
      onChangeText={updateTodo}
    />
    <Button title="Save Todo" onPress={addTodo} />
  </View>
);
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default AddTodo;
