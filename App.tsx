import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import WelcomeComponent from './components/WelcomeComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types/type';
import AuthComponent from './components/AuthComponent';
import MyDesk from './components/MyDesk';
import PlusLogo from './components/logos/PlusLogo';
import {Image} from 'react-native';
import * as url from 'url';

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
          <RootStack.Screen
            name="MyDesk"
            component={MyDesk}
            options={{
              title: 'My Desk',
              headerLeft: () => null,
              // @ts-ignore
              headerRight: () => <PlusLogo style={{marginRight: 20}} />,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
