import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatisticsScreen = () => {
  return (
    <View>
      <View></View>

      <View style={styles.sbar1}>
        <Text style={{fontSize: 18}}>Total Task</Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#219ff6',
            height: 27,
            width: 27,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            22
          </Text>
        </View>
      </View>

      <View style={styles.sbar2}>
        <Text style={{fontSize: 18}}>Completed Task</Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#0c8e5c',
            height: 27,
            width: 27,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            60
          </Text>
        </View>
      </View>

      <View style={styles.sbar3}>
        <Text style={{fontSize: 18}}>Pending Task</Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#fcd61c',
            height: 27,
            width: 27,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            11
          </Text>
        </View>
      </View>

      <View style={styles.sbar4}>
        <Text style={{fontSize: 18}}>Over Due Pending Task</Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#c82d27',
            height: 27,
            width: 27,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            60
          </Text>
        </View>
      </View>

      <View style={styles.sbar5}>
        <Text style={{fontSize: 18}}>Over Due Completed Task</Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#ed7411',
            height: 27,
            width: 27,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            60
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sbar1: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#e7f8ff',
  },
  sbar2: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#ceffec',
  },
  sbar3: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#fef9db',
  },
  sbar4: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#ffeded',
  },
  sbar5: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#ffecdd',
  },
});

export default StatisticsScreen;
