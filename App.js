import React from 'react';
import { AppRegistry, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import HeaderApp from './src/components/HeaderApp';


export default class App extends React.Component {

  render() {
    return (
      <Container>
        <HeaderApp headerText={'Manager'} />
      </Container>

    );
  }
}



AppRegistry.registerComponent('touristappfirebase', () => App);