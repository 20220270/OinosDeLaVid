import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import {
  ProfileScreen,
  ListScreen,
  MessageScreen,
  ActivityScreen
} from './screens'; // Asegúrate de que la ruta sea correcta

const Drawer = createDrawerNavigator();

function MyDrawer() { // Cambia el nombre de esta función a algo distinto de 'App'
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Menu':
              iconName = 'circle';
              break;
            case 'Ordenes':
              iconName = 'message-circle';
              break;
            case 'Mis compras':
              iconName = 'list';
              break;
            case 'Perfil':
              iconName = 'user';
              break;
            
            default:
              iconName = 'circle';
              break;
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Menu" component={ProfileScreen} />
      <Drawer.Screen name="Ordenes" component={MessageScreen} />
      <Drawer.Screen name="Mis compras" component={ActivityScreen} />
      <Drawer.Screen name="Perfil" component={ListScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
