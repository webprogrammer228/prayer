import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import NewComponent from './components/NewComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Todo" component={NewComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
