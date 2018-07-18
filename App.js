import React from 'react';
import { AppRegistry, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import firebase from 'firebase';
import RouterComponent from './src/Router';


export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDMIHBVpsFE9pMksWOyLP2SIfN_HSLNU74",
      authDomain: "managerjob-4c1d2.firebaseapp.com",
      databaseURL: "https://managerjob-4c1d2.firebaseio.com",
      projectId: "managerjob-4c1d2",
      storageBucket: "",
      messagingSenderId: "153258763744"
    };
    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Container>
          <RouterComponent />
        </Container>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('managerjobapp', () => App);