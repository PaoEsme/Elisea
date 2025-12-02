import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buscar from './screens/Buscar';
import Carrito from './screens/Carrito';
import Cerrar_S from './screens/Cerrar_S';
import Comida from './screens/Comida';
import ComidaFiltrado from './screens/ComidaFiltrado';
import ContrasenaSeguridadCambio from './screens/Contrasena_de_seguridad_del_cambio';
import Equipamientos from './screens/Equipamientos';
import EquipamientosFiltrado from './screens/EquipamientosFiltrado';
import Historial from './screens/Historial';
import HistorialBusqueda from './screens/HistorialBusqueda';
import Home from './screens/Home';
import Login from './screens/Login';
import Mensajes1 from './screens/Mensajes1';
import Mensajes2 from './screens/Mensajes2';
import SeleccionPago from './screens/Metodo_Pago';
import Notificaciones1 from './screens/Notificaciones1';
import Notificaciones2 from './screens/Notificaciones2';
import NuevaContrasena from './screens/NuevaContraseña';
import PagoExitoso from './screens/Pago_Finalizado';
import PantallaCarga from './screens/PantallaCarga';
import RealizarPago from './screens/Realizar_Pago';
import Salones from './screens/Salones';
import SalonesFiltrado from './screens/SalonesFiltrado';
import Perfil_User from './screens/Usuario/Perfil_User';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PantallaCarga" component={PantallaCarga} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeTab" component={Home} />
        <Stack.Screen name="SalonesTab" component={Salones} />
        <Stack.Screen name="SalonesMain" component={Salones} />
        <Stack.Screen name="SalonesFiltrado" component={SalonesFiltrado} />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="ContrasenaSeguridad" component={ContrasenaSeguridadCambio} />
        <Stack.Screen name="NuevaContrasena" component={NuevaContrasena} />
        <Stack.Screen name="Equipamientos" component={Equipamientos} />
        <Stack.Screen name="EquipamientosFiltrado" component={EquipamientosFiltrado} />
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="SeleccionPago" component={SeleccionPago} />
        <Stack.Screen name="RealizarPago" component={RealizarPago} />
        <Stack.Screen name="PagoExitoso" component={PagoExitoso} />
        <Stack.Screen name="Perfil_User" component={Perfil_User} />
        <Stack.Screen name="Historial" component={Historial} />
        <Stack.Screen name="Cerrar_S" component={Cerrar_S} />
        <Stack.Screen name="HistorialBusqueda" component={HistorialBusqueda} />
        <Stack.Screen name="Mensajes1" component={Mensajes1} />
        <Stack.Screen name="Mensajes2" component={Mensajes2} />
        <Stack.Screen name="Notificaciones1" component={Notificaciones1} />
        <Stack.Screen name="Notificaciones2" component={Notificaciones2} />
        <Stack.Screen name="Comida" component={Comida} />
        <Stack.Screen name="ComidaFiltrado" component={ComidaFiltrado} />

 
      </Stack.Navigator>
    </NavigationContainer>
  );
}