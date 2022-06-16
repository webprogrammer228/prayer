import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types/type';
import {
  AuthComponent,
  MyDesk,
  CreateColumn,
  WelcomeComponent,
  PlusLogo,
} from './components';

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
              headerRight: () => (
                <PlusLogo style={{marginRight: 20}} screen={'CreateColumn'} />
              ),
            }}
          />
          <RootStack.Screen
            name="CreateColumn"
            component={CreateColumn}
            options={{title: 'Create Column'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
