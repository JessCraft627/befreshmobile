import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductScreen from './screens/ProductScreen';
import LoggedScreen from './screens/LoggedScreen';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import reducer from './src/reducers/name.js'
import { createStackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Products: ProductsScreen,
    Logged: LoggedScreen,
    Product: ProductScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <RootStack />;
        </React.Fragment>
      </Provider>
    );
  }
}
