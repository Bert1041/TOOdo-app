import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/TodoContext';

const CompletedtaskScreen = ({route}) => {
  const {state} = React.useContext(Context);
  const todos = state.find((todos) => todos.id === route.params.id);

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.piclabel1}>COMPLETED</Text>
      </View>

      <View style={styles.bodyText}>
        <Text style={{fontSize: 18}}>Title: {todos.title} </Text>
        <Text style={{marginTop: 15, fontSize: 18}}>
          Description : {todos.description}
        </Text>
        <Text style={{marginTop: 15, fontSize: 18}}>
          Created on : {todos.createdOn}
        </Text>
        <Text style={{marginTop: 15, fontSize: 18}}>
          Completed Date: {todos.completedDate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  piclabel1: {
    marginTop: 40,
    padding: 10,
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bodyText: {
    marginTop: 40,
    padding: 10,
  },
});

export default CompletedtaskScreen;
