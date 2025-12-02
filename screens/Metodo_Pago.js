import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../components/Navbar'; // Importamos Navbar

const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#006B3E'; 

const SeleccionPago = () => {
  const navigation = useNavigation();

  const rentableItems = [
    { nombre: 'Salón LA ROBA', proveedor: 'Nombre del proveedor', precio: 2000.00 },
    { nombre: 'Decoración LA ROBA', proveedor: 'Nombre del proveedor', precio: 500.00 },
    { nombre: 'Comida LA ROBA', proveedor: 'Nombre del proveedor', precio: 10000.00 },
  ];

  const calculateTotal = () => {
    return rentableItems.reduce((sum, item) => sum + item.precio, 0).toFixed(2);
  };

  const paymentMethods = [
    { 
        name: 'Tarjeta de Crédito / Débito', 
        subtitle: 'Realizar Pago', 
        color: PURPLE_DARK, 
        textColor: 'white', 
        logo: '💳',
        screen: 'RealizarPago' 
    },
    { name: 'Pay Pal', subtitle: 'Realizar Pago', color: '#1370B5', textColor: 'white', logo: '🅿️', screen: null },
    { name: 'MasterCard', subtitle: 'Pagar', color: '#B00000', textColor: 'white', logo: 'Ⓜ️', screen: null },
    { name: 'Visa', subtitle: 'Realizar Pago', color: '#1D1D1D', textColor: 'white', logo: '💳', screen: null },
    { name: 'Apple Pay', subtitle: 'Realizar Pago', color: '#FFFFFF', textColor: '#1D1D1D', logo: '', screen: null },
    { name: 'OXXO', subtitle: 'Pagar con OXXO', color: '#E30613', textColor: 'white', logo: '🏪', screen: null },
  ];

  const handlePaymentSelect = (screen) => {
    if (screen) {
        navigation.navigate(screen);
    } else {
        alert("Método de pago próximamente disponible");
    }
  };

  const handleFinalPayment = () => {
    // Por defecto lleva a pago con tarjeta
    navigation.navigate('RealizarPago');
  };
  
  const RentableItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemNombre}>{item.nombre}</Text>
      <Text style={styles.itemProveedor}>PROVEEDOR: {item.proveedor}</Text>
      <Text style={styles.itemPrecio}>${item.precio.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 1. Navbar Oficial */}
      <Navbar />

      {/* 2. Nuevo Encabezado Limpio (Flecha + Título) */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             {/* Flecha morada porque el fondo ahora es blanco */}
             <MaterialIcons name="arrow-back" size={28} color={PURPLE_DARK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Método de Pago</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Hola, selecciona tu método de pago</Text>

        {/* Datos Personales */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>DATOS PERSONALES</Text>
          <Text style={styles.dato}>Alison Ugalde Arras</Text>
          <Text style={styles.dato}>+52 923 445 7600</Text>
          <Text style={styles.dato}>Dirección: Blvd. Xalapa #123</Text>
        </View>

        {/* Rentables */}
        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>RENTABLES</Text>
          {rentableItems.map((item, index) => (
            <RentableItem key={index} item={item} />
          ))}

          <View style={[styles.fila, styles.totalRow]}>
            <Text style={styles.totalTexto}>Total de Rentables</Text>
            <Text style={styles.totalMonto}>${calculateTotal()}</Text>
          </View>
        </View>

        {/* Monto Final */}
        <View style={styles.montoContainer}>
          <Text style={styles.montoTexto}>Monto a pagar</Text>
          <Text style={styles.monto}>${calculateTotal()}</Text>
        </View>

        {/* Métodos de Pago Grid */}
        <View style={styles.metodosPagoGrid}>
          {paymentMethods.map((method, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.metodoItem, { backgroundColor: method.color }]}
              onPress={() => handlePaymentSelect(method.screen)}
            >
              <Text style={[styles.metodoLogo, { color: method.textColor }]}>{method.logo}</Text>
              <Text style={[styles.metodoNombre, { color: method.textColor }]}>{method.name}</Text>
              <Text style={[styles.metodoSubtitulo, { color: method.textColor }]}>{method.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity style={styles.btnPagar} onPress={handleFinalPayment}>
            <Text style={styles.btnPagarTexto}>PAGAR</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
  
  // === NUEVOS ESTILOS DE HEADER ===
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 10,
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  // ===============================

  scrollContent: {
    padding: 20,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  
  // Titulo "Hola..."
  titulo: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },

  seccion: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  seccionTitulo: {
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 10,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  dato: {
    color: '#333',
    marginBottom: 5,
  },

  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 8,
  },
  itemNombre: {
    fontWeight: 'bold',
    color: '#333',
  },
  itemProveedor: {
    color: '#666',
    fontSize: 12,
  },
  itemPrecio: {
    color: PURPLE_DARK,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  totalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  totalTexto: {
    fontWeight: 'bold',
    color: PURPLE_DARK,
    fontSize: 16,
  },
  totalMonto: {
    fontWeight: 'bold',
    color: PURPLE_DARK,
    fontSize: 16,
  },

  montoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: PURPLE_DARK,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  montoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  monto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  
  metodosPagoGrid: {
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metodoItem: {
    width: '48%', 
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  metodoLogo: {
    fontSize: 30,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  metodoNombre: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  metodoSubtitulo: {
    fontSize: 12,
  },

  btnPagar: {
    backgroundColor: ACCENT_COLOR, 
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
    shadowColor: ACCENT_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  btnPagarTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SeleccionPago;