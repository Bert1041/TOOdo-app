import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/TodoContext';

const PendingtaskScreen = ({route}) => {
  const {state, deleteTodo} = React.useContext(Context);
  const todos = state.find((todos) => todos.id === route.params.id);

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.piclabel1}>PENDING</Text>
        <Text style={styles.piclabel2}>LAST DAY</Text>
      </View>

      <View style={styles.bodyText}>
        <Text style={{fontSize: 16}}> Title: {todos.title} </Text>
        <Text style={{marginTop: 15, fontSize: 16}}>
          Description: {todos.description}
        </Text>
        <Text style={{marginTop: 15, fontSize: 16}}>
          Created on: {todos.createdOn}
        </Text>
      </View>

      <View style={{margin: 20}}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              color: 'white',
              fontSize: 17,
            }}>
            DELETE TASK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  piclabel1: {
    marginTop: 40,
    padding: 10,
    color: 'gold',
    fontSize: 25,
    fontWeight: 'bold',
  },
  piclabel2: {
    marginTop: 40,
    padding: 10,
    color: 'deepskyblue',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bodyText: {
    marginTop: 40,
    padding: 10,
  },
  button: {
    padding: 5,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    height: 35,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PendingtaskScreen;
