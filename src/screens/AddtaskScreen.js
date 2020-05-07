import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/TodoContext';

const AddtaskScreen = ({route, navigation}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [createdOn, setCreatedOn] = React.useState('');
  const [completedDate, setCompletedDate] = React.useState('');
  const {addTodo} = React.useContext(Context);

  return (
    <View>
      <View style={{padding: 10, marginHorizontal: 10}}>
        <Text style={{marginTop: 20, fontSize: 18}}>Title</Text>
        <TextInput
          style={styles.text1Input}
          placeholder="Add Title"
          placeholderTextColor="gray"
          returnKeyType={'next'}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={{marginTop: 20, fontSize: 18}}>Description</Text>
        <TextInput
          style={styles.text2Input}
          placeholder="Write Description"
          placeholderTextColor="gray"
          multiline={true}
          maxLength={100}
          underlineColorAndroid="transparent"
          value={description}
          onChangeText={setDescription}
        />
        <Text style={{marginTop: 35, fontSize: 18}}>Due Date</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#009688',
          }}>
          <TextInput
            style={styles.DateInputStyle1}
            placeholder="22-8-2017"
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            keyboardType={'numeric'}
            maxLength={10}
            value={createdOn}
            onChangeText={setCreatedOn}
          />
        </View>
        <Text style={{marginTop: 40, fontSize: 18}}>
          Task Already Completed?
        </Text>
        {/* <RadioButton/> */}
        <Text style={{marginTop: 50, fontSize: 14}}>
          Let us know when you completed it
        </Text>
        {/* <DatePicker/> */}
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#009688',
          }}>
          <TextInput
            style={styles.DateInputStyle2}
            placeholder="dd-mm-yyyy"
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            keyboardType={'numeric'}
            maxLength={10}
            value={completedDate}
            onChangeText={setCompletedDate}
          />
        </View>
      </View>

      <View style={{margin: 20}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addTodo(title, description, createdOn, completedDate, () => {
              navigation.navigate('Dash');
            });
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              color: 'white',
            }}>
            ADD TASK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Input: {
    height: 50,
    marginHorizontal: 5,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'gainsboro',
  },

  text2Input: {
    height: 80,
    marginHorizontal: 5,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'gainsboro',
  },

  button: {
    padding: 5,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    height: 35,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DateInputStyle1: {
    padding: 10,
    height: 40,
    width: 330,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  DateInputStyle2: {
    padding: 10,
    height: 40,
    width: 330,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  ImageIconStyle1: {
    height: 20,
    width: 20,
    marginTop: 10,
  },
  ImageIconStyle2: {
    height: 20,
    width: 20,
    marginTop: 10,
  },
});

export default AddtaskScreen;
