import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from './src/screens/DashboardScreen';
import AddtaskScreen from './src/screens/AddtaskScreen';
import CompletedtaskScreen from './src/screens/CompletedtaskScreen';
import PendingtaskScreen from './src/screens/PendingtaskScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import {Provider} from './src/context/TodoContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dash"
          component={DashboardScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
                  <Icon
                    name="bar-chart"
                    size={22}
                    style={{marginRight: 25}}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                  <Icon
                    name="edit"
                    size={22}
                    style={{marginRight: 25}}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            ),
            title: 'Task List',
            headerStyle: {
              backgroundColor: '#275fbc',
            },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen
          name="Add"
          component={AddtaskScreen}
          options={{
            title: 'Add Task',
            headerStyle: {
              backgroundColor: '#275fbc',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Completed"
          component={CompletedtaskScreen}
          options={{
            title: 'Task',
            headerStyle: {
              backgroundColor: '#275fbc',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Pending"
          component={PendingtaskScreen}
          options={{
            title: 'Task',
            headerStyle: {
              backgroundColor: '#275fbc',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Stats"
          component={StatisticsScreen}
          options={{
            title: 'Statistics',
            headerStyle: {
              backgroundColor: '#275fbc',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
