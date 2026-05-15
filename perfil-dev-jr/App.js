import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'auto'} />
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
