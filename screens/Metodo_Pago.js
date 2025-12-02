// screens/SeleccionPago.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// 🛑 CRÍTICO: Importar useRouter para la navegación
import { useRouter } from 'expo-router'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

// Definición de colores
const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#006B3E'; 

const SeleccionPago = () => {
  const router = useRouter(); // Inicializar el hook de router

  // Datos de ejemplo para la sección de rentables
  const rentableItems = [
    { nombre: 'Salón LA ROBA', proveedor: 'Nombre del procedor', precio: 2000.00 },
    { nombre: 'Decoración LA ROBA', proveedor: 'Nombre del procedor', precio: 500.00 },
    { nombre: 'Comida LA ROBA', proveedor: 'Nombre del procedor', precio: 10000.00 },
  ];

  // Función para calcular el total
  const calculateTotal = () => {
    return rentableItems.reduce((sum, item) => sum + item.precio, 0).toFixed(2);
  };

  // Definición de los métodos de pago con colores y logos simulados
  const paymentMethods = [
    // El método principal debe navegar a la pantalla de pago con tarjeta
    { 
        name: 'Tarjeta de Credito / Debito', 
        subtitle: 'Realizar Pago', 
        color: PURPLE_DARK, 
        textColor: 'white', 
        logo: '💳',
        route: '/realizar-pago' // Ruta asumida para PagoTarjeta (Realizar_Pago.js)
    },
    // Los demás métodos pueden simular una navegación directa al éxito
    { name: 'Pay Pal', subtitle: 'Realizar Pago', color: '#1370B5', textColor: 'white', logo: '🅿️', route: '/pago-finalizado' },
    { name: 'MasterCard', subtitle: 'Pagar', color: '#B00000', textColor: 'white', logo: 'Ⓜ️', route: '/pago-finalizado' },
    { name: 'Visa', subtitle: 'Realizar Pago', color: '#1D1D1D', textColor: 'white', logo: '💳', route: '/pago-finalizado' },
    { name: 'Apple Pay', subtitle: 'Realizar Pago', color: '#FFFFFF', textColor: '#1D1D1D', logo: '', route: '/pago-finalizado' },
    { name: 'OXXO', subtitle: 'Pagar con OXXO', color: '#E30613', textColor: 'white', logo: '🏪', route: '/pago-finalizado' },
  ];

  const handlePaymentSelect = (route) => {
    // Usar router.push para navegar a la ruta correspondiente
    router.push(route);
  };

  // Función para el botón final de Pagar
  const handleFinalPayment = () => {
    // Por defecto, navegaremos a la pantalla de la tarjeta de crédito/débito
    router.push('/realizar-pago');
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
      {/* 🛑 HEADER - Diseño de la Imagen 🛑 */}
      <View style={styles.header}>
        <Text style={styles.logo}>E</Text>
        <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={styles.searchText}>Buscar en Elisea</Text>
        </View>
        <Text style={styles.moreIcon}>⋮</Text>
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

          {/* Fila de Totales */}
          <View style={[styles.fila, styles.totalRow]}>
            <Text style={styles.totalTexto}>Total de Rentables</Text>
            <Text style={styles.totalMonto}>${calculateTotal()}</Text>
          </View>
        </View>

        {/* Monto Final a Pagar */}
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
              onPress={() => handlePaymentSelect(method.route)}
            >
              <Text style={[styles.metodoLogo, { color: method.textColor }]}>{method.logo}</Text>
              <Text style={[styles.metodoNombre, { color: method.textColor }]}>{method.name}</Text>
              <Text style={[styles.metodoSubtitulo, { color: method.textColor }]}>{method.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Botón Final de Pagar */}
        <TouchableOpacity style={styles.btnPagar} onPress={handleFinalPayment}>
            <Text style={styles.btnPagarTexto}>PAGAR</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

// === STYLES ===
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
  scrollContent: {
    padding: 20,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  
  // 🛑 HEADER STYLES (Replicando el diseño de las imágenes)
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: PURPLE_DARK, 
    paddingTop: 40, 
    marginBottom: 10,
  },
  logo: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginRight: 10,
  },
  searchBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: 10,
  },
  searchIcon: {
      fontSize: 16,
      color: '#aaa',
      marginRight: 5,
  },
  searchText: {
      color: '#aaa',
      fontSize: 14,
  },
  moreIcon: {
      color: 'white',
      fontSize: 24,
      marginLeft: 10,
      fontWeight: 'bold',
  },
  
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 20,
    textAlign: 'center',
  },

  // === SECCIONES ===
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

  // === RENTABLES ITEMS ===
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
  
  // === FILA DE TOTALES ===
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

  // === MONTO A PAGAR (Caja Morada) ===
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
  
  // === METODOS DE PAGO GRID ===
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

  // === BOTÓN FINAL ===
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