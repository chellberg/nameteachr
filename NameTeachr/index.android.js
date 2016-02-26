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
  TouchableOpacity,
  View
} from 'react-native';
import _ from 'lodash'

import names from './utils/names'

class NameTeachr extends Component {
  constructor(props) {
    super(props)
    const uriArray = _.map(names.array, name => {
      return `http://s3.amazonaws.com/healthpro-static-assets/HQ/${name}.jpg`
    })

    this.state = {
      currentIndex: 0,
      uriArray
    }
  }

  incrementIndex() {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  render() {
    const imageStyle = {
      width: 400,
      height: 400
    }

    const uri = this.state.uriArray[this.state.currentIndex]
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to OurHealth!
        </Text>
        <Text style={styles.instructions}>
          Time to learn some names.
          Tap the image to advance
        </Text>
        <TouchableOpacity
          onPress={() => this.incrementIndex()}
          style={{ marginTop: 20 }}>
          <Image source={{ uri: uri }}
                 style={imageStyle}
          />
        </TouchableOpacity>
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
