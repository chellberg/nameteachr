/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import darren from './img/darren_carter.jpg'

class NameTeachr extends Component {

  render() {
    const imageStyle = {
      width: 150,
      height: 150
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the OurHealth NameTeachr!
        </Text>
        <Image source={require('./img/ashley_davis.jpg')}
               style={imageStyle}
        />

        <Image source={darren}
               style={imageStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NameTeachr', () => NameTeachr);
