import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthProvider from './assets/components/context/AutenticationContext';

import Tela from './assets/components/screem/Tela';
import Tela1 from './assets/components/screem/Tela1';
import Tela2 from './assets/components/screem/Tela2';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <navStack.Navigator>
          <navStack.Screen name='Transloka' component={Tela} />
          <navStack.Screen name='Seleção de viagem' component={Tela1}/>
          <navStack.Screen name='Confirmado!' component={Tela2} />
        </navStack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}