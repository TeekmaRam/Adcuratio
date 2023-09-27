import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './Src/Route/BottomTab';



function App() {

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    }

  }, [])

  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}



export default App;
