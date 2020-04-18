import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const ToDo = ({todo, deletetodo, toggletodo}) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>{todo.title}</Text>
    <View style={styles.buttons}>
      <TouchableHighlight
        onPress={deletetodo}
        underlayColor="#efefef"
        style={styles.button}>
        <Text style={[styles.text, styles.deleteButton]}>Delete</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={toggletodo}
        underlayColor="#efefef"
        style={styles.button}>
        <Text style={[styles.text, todo.complete ? styles.complete : null]}>
          Complete
        </Text>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 17,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666',
  },
  deleteButton: {
    color: 'rgba(175,47,47,1)',
  },
  complete: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ToDo;
