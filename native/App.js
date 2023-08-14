import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>

        <View style={styles.button}>
          <Image source={require('./assets/telefoneIcone1.png')} style={styles.buttonImage} />
        </View>

        <View style={styles.button}>
          <Image source={require('./assets/telefoneIcone1.png')} style={styles.buttonImage} />
        </View>

      </View>

      <View style={styles.buttonRow}>

        <View style={styles.button}>
          <Image source={require('./assets/zapIcon3.png')} style={styles.buttonImage} />
        </View>

        <View style={styles.button}>
          <Image source={require('./assets/splash.png')} style={styles.buttonImage} />
        </View>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
});

export default App;
