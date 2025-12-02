/*import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Mensajes_1 from '../../pages/Mensajes_1';
import Mensajes_2 from '../../pages/Mensajes_2';

const Stack = createStackNavigator();

export default function MensajesIndex() {
  return (
    // Stack.Navigator es el contenedor que permite viajar entre pantallas
    <Stack.Navigator 
      initialRouteName="ListaChats"
      screenOptions={{ 
        headerShown: false // Ocultamos el encabezado por defecto porque tú ya diseñaste los tuyos
      }}
    >

      <Stack.Screen 
        name="ListaChats" 
        component={Mensajes_1} 
      />

      <Stack.Screen 
        name="ChatDetalle" 
        component={Mensajes_2} 
      />

    </Stack.Navigator>
  );
}
*/
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Notificaciones_1 from '../../pages/Notificaciones_1';
import Notificaciones_2 from '../../pages/Notificaciones_2';

const Stack = createStackNavigator();

export default function TabIndex() {
  return (
    <Stack.Navigator 
      initialRouteName="ListaNotificaciones"
      screenOptions={{ headerShown: false }} 
    >
      
      {/* PANTALLA 1: La lista (Donde ves todas las notificaciones) */}
      <Stack.Screen 
        name="ListaNotificaciones" 
        component={Notificaciones_1} 
      />

      {/* PANTALLA 2: El detalle (Donde ves la info completa al dar clic) */}
      <Stack.Screen 
        name="NotificacionDetalle" 
        component={Notificaciones_2} 
      />

    </Stack.Navigator>
  );
}