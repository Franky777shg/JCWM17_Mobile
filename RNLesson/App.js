import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

// import screens
import TopicDay2 from './src/lessons/TopicDay2';
import TopicDay3 from './src/lessons/TopicDay3';
import TopicDay4 from './src/lessons/TopicDay4';
import TopicDay5 from './src/lessons/TopicDay5';

//import navigators
import StackNav from './src/navigators/stackNav';
import BottomTabNav from './src/navigators/bottomTabNav';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNav /> */}
      <BottomTabNav />
    </NavigationContainer>
  )
};

export default App;
