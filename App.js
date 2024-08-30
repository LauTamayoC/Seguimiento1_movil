import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.boxA}>
        <Text style={styles.text}>A</Text>
      </View>

      
      <View style={styles.row}>
        <View style={styles.boxB}>
          <Text style={styles.text}>B</Text>
        </View>
        <View style={styles.boxC}>
          <Text style={styles.text}>C</Text>
        </View>
        <View style={styles.boxD}>
          <Text style={styles.text}>D</Text>
        </View>
      </View>

      
      <View style={styles.row}>
        <View style={styles.boxE}>
          <Text style={styles.text}>E</Text>
        </View>
        <View style={styles.boxF}>
          <Text style={styles.text}>F</Text>
        </View>
        <View style={styles.boxG}>
          <Text style={styles.text}>G</Text>
        </View>
      </View>

      
      <View style={styles.boxH}>
        <Text style={styles.text}>H</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0',
  },
  boxA: {
    width: '85%', 
    height: '15%',
    marginTop:15,
    borderRadius:25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 20, 
  },
  boxB: {
    width: 80,
    height: 80,
    borderRadius:15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxC: {
    width: 80,
    height: 80,
    borderRadius:15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxD: {
    width: 80,
    height: 80,
    borderRadius:15,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxE: {
    width: 80,
    height: 80,
    borderRadius:15,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxF: {
    width: 80,
    height: 80,
    borderRadius:15,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxG: {
    width: 80,
    height: 80,
    borderRadius:15,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxH: {
    width: '85%', 
    height: '30%',
    margin: 25,
    borderRadius:25,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
