import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import WelcomeComponent from './components/WelcomeComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types/type';
import AuthComponent from './components/AuthComponent';

const App = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerTitleAlign: 'center'}}>
          <RootStack.Screen name="Welcome" component={WelcomeComponent} />
          <RootStack.Screen name="Auth" component={AuthComponent} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
