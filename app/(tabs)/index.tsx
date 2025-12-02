// Navegación de Pagos
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Perfil_User from '@/screens/Metodo_Pago'; // ✅ Importar interfacez
/* FILTRADO

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Filtrado from '../../pages/Filtrado';

export default function Index() {
  const navigation = useNavigation();
  return <Filtrado />;
}
  */

/*HOME
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Home from '../../pages/Home';

export default function Index() {
  const navigation = useNavigation();
  return <Home />;
}
  */

/*LOGIN
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Login from '../../pages/Login';

export default function Index() {
  const navigation = useNavigation();
  return <Login />;
}
  */

/* LUPA
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import CatalogosScreen from '../../pages/Lupa';

export default function Index() {
  const navigation = useNavigation();
  return <CatalogosScreen navigation={navigation}  />;
}
  */

/* SALONES
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Salones from '../../pages/Salones';

export default function Index() {
  const navigation = useNavigation();
  return <Salones route={{ params: undefined }} />;
}
  */

/* PRUEBA

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Salones from '../../pages/Salones';

export default function Index() {
  const navigation = useNavigation();
  return <Salones route={{ params: undefined }} />;
}

*/
/*
import { createStackNavigator } from '@react-navigation/stack';
import Salones from '../../pages/Salones';
import SalonesFiltrado from '../../pages/SalonesFiltrado';

const Stack = createStackNavigator();

export default function App() {
  return (
    /*<SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3b004f" />
      <Perfil_User /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
});
      <Stack.Navigator>
        <Stack.Screen name="Salones" component={Salones} />
        <Stack.Screen name="Filtrado" component={SalonesFiltrado} />
      </Stack.Navigator>
  );
}

/* <Stack.Screen name="DetallesSalon" component={DetallesSalon} /> */
