import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from './app/redux/store';
import AppContainer from './app/Routes';

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      SplashScreen.hide();
    }, 2000);
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
