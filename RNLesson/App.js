import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import screens
import TopicDay2 from './src/lessons/TopicDay2';
import TopicDay3 from './src/lessons/TopicDay3';
import TopicDay4 from './src/lessons/TopicDay4';
import TopicDay5 from './src/lessons/TopicDay5';
import Home from './src/screens/home';
import Profile from './src/screens/profile';
import Comment from './src/screens/comment';

const App = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Comment" component={Comment} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
