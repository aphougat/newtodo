import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ToDo from './ToDo';

const TodoList = ({todolist, deletetodo, toggletodo}) => (
  <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
    {todolist.map(todo => (
      <ToDo
        todo={todo}
        key={todo.index}
        deletetodo={() => deletetodo(todo.index)}
        toggletodo={() => toggletodo(todo)}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default TodoList;
