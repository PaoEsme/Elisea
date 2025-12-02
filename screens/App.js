import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importa todas tus pantallas
import CarritoScreen from './screens/Carrito'; 
import MetodoPagoScreen from './screens/Metodo_Pago'; 
import RealizarPagoScreen from './screens/Realizar_Pago'; 
import PagoFinalizadoScreen from './screens/Pago_Finalizado'; 

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Carrito" 
      screenOptions={{ headerShown: false }} // Oculta el header por defecto si usas el tuyo
    >
      <Stack.Screen name="Carrito" component={CarritoScreen} />
      <Stack.Screen name="MetodoPago" component={MetodoPagoScreen} />
      <Stack.Screen name="RealizarPago" component={RealizarPagoScreen} />
      <Stack.Screen name="PagoFinalizado" component={PagoFinalizadoScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}