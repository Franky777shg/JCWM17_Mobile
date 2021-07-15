import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const App = () => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.output}>
        <Text style={{ fontSize: 30 }}>123</Text>
      </View>
      <View style={styles.contButton}>
        <View style={styles.contBtnOperation}>
          <TouchableOpacity style={styles.btnOperation}>
            <FontAwesome5 name="copyright" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOperation}>
            <FontAwesome5 name="plus" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOperation}>
            <FontAwesome5 name="minus" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOperation}>
            <FontAwesome5 name="divide" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOperation}>
            <FontAwesome5 name="times" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOperation}>
            <FontAwesome5 name="equals" size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.contBtnNumber}></View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1
  },
  output: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1
  },
  contButton: {
    backgroundColor: 'lightblue',
    flex: 2
  },
  contBtnOperation: {
    backgroundColor: 'salmon',
    flex: 1,
    flexDirection: 'row'
  },
  btnOperation: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 25
  },
  contBtnNumber: {
    backgroundColor: 'yellow',
    flex: 4
  }
});

export default App;
