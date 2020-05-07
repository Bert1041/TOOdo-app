import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/TodoContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = ({navigation}) => {
  const {state} = React.useContext(Context);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(todos) => todos.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Pending', {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  createdOn: item.createdOn,
                })
              }>
              {/* <Icon name="rocket" size={18} color="#fff" /> */}
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} {/*- {item.id}-{item.completed} */}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Completed', {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      createdOn: item.createdOn,
                      completedDate: item.completedDate,
                    })
                  }>
                  <Icon
                    name="check"
                    size={22}
                    style={{backgroundColor: 'lightgreen'}}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Add')}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,
  },
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#275fbc',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 40,
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25,
  },
});

export default DashboardScreen;
