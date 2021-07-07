import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

// import screens
import TopicDay2 from './src/lessons/TopicDay2';
import TopicDay3 from './src/lessons/TopicDay3';
import TopicDay4 from './src/lessons/TopicDay4';
import TopicDay5 from './src/lessons/TopicDay5';
import Login from './src/screens/login';
import Register from './src/screens/register';

//import navigators
import BottomTabNav from './src/navigators/bottomTabNav';
import LoginRegStack from './src/navigators/loginRegStack';
import MainNavigator from './src/navigators/mainNavigator';

// setup redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import allReducer from './src/redux/reducers'
const globalState = createStore(allReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={globalState}>
      <MainNavigator />
    </Provider>
  )
};

export default App;
