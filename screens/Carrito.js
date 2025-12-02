// screens/MiCarrito.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// 🛑 CRÍTICO: Importar useRouter para la navegación en Expo Router
import { useRouter } from 'expo-router'; 

const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#006B3E'; // Color de acento para el botón de pago

// El componente ya no recibe 'navigation' como prop
const MiCarrito = () => { 
  const router = useRouter(); // Inicializar el hook de router para navegar

  // Datos de ejemplo para el carrito
  const [items, setItems] = useState([
    {
      id: 1,
      titulo: "Salón Fresita",
      proveedor: "Nombre del Proveedor",
      fecha: "26 / 09 / 2025",
      precio: 5000,
      imagen: "https://i.ibb.co/1d2q9Pz/salon.jpg"
    },
    {
      id: 2,
      titulo: "Decoraciones Fresita",
      proveedor: "Nombre del Proveedor",
      fecha: "26 / 09 / 2025",
      precio: 2000,
      imagen: "https://i.ibb.co/NWjzc93/deco.jpg"
    },
    {
      id: 3,
      titulo: "Comida Fresita",
      proveedor: "Nombre del Proveedor",
      fecha: "26 / 09 / 2025",
      precio: 7500,
      imagen: "https://i.ibb.co/5kncKfP/comida.jpg"
    },
    {
      id: 4,
      titulo: "Pasteles Fresita",
      proveedor: "Nombre del Proveedor",
      fecha: "26 / 09 / 2025",
      precio: 500,
      imagen: "https://i.ibb.co/q06L6sK/pastel.jpg"
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Función para eliminar un ítem del carrito
  const handleDeleteItem = (id) => {
    setItemToDelete(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    setItems(items.filter(item => item.id !== itemToDelete));
    setModalVisible(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  // Calcular el total
  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.precio, 0).toFixed(2);
  };

  // 🛑 Función de navegación para ir a la pantalla de selección de pago
  const handleCheckout = () => {
    // Asumiendo que has creado el archivo 'app/seleccion-pago.js' o similar
    router.push('/seleccion-pago'); 
  };

  const CartItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo} numberOfLines={1}>{item.titulo}</Text>
        <Text style={styles.cardProveedor} numberOfLines={1}>PROVEEDOR: {item.proveedor}</Text>
        <Text style={styles.cardFecha}>FECHA: {item.fecha}</Text>
        
        <View style={styles.row}>
          <Text style={styles.cardPrecio}>${item.precio.toFixed(2)}</Text>
          <TouchableOpacity 
            style={styles.btnEliminar}
            onPress={() => handleDeleteItem(item.id)}
          >
            <Icon name="delete" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
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

      <Text style={styles.titulo}>Mi Carrito ({items.length})</Text>

      {/* 🛑 Lista de Items 🛑 */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {items.length > 0 ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <Text style={styles.emptyCartText}>Tu carrito está vacío.</Text>
        )}
      </ScrollView>

      {/* 🛑 TOTAL Y BOTÓN DE PAGO 🛑 */}
      {items.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTexto}>Total:</Text>
            <Text style={styles.totalMonto}>${calculateTotal()}</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.btnPagar}
            onPress={handleCheckout} // Usar la nueva función de navegación
          >
            <Text style={styles.btnPagarTexto}>PAGAR AHORA</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 🛑 MODAL DE CONFIRMACIÓN 🛑 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelDelete}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalCaja}>
            <Text style={styles.modalTexto}>
              ¿Estás seguro de que quieres eliminar este ítem de tu carrito?
            </Text>
            <View style={styles.modalBotones}>
              <TouchableOpacity style={[styles.modalBtn, styles.modalBtnCancelar]} onPress={cancelDelete}>
                <Text style={styles.modalBtnTexto}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, styles.modalBtnConfirmar]} onPress={confirmDelete}>
                <Text style={styles.modalBtnTexto}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 15,
    paddingBottom: 20, 
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
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginVertical: 20,
    textAlign: 'center',
  },

  emptyCartText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 50,
  },

  // === CARD ITEM ===
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    maxWidth: 500, 
    alignSelf: 'center',
    width: '100%',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12
  },
  cardTitulo: { 
    fontWeight: 'bold', 
    fontSize: 15, 
    color: '#000' 
  },
  cardProveedor: { 
    color: '#555', 
    fontSize: 12 
  },
  cardFecha: { 
    color: '#333', 
    fontSize: 12, 
    marginBottom: 5 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', 
  },
  cardPrecio: {
    backgroundColor: '#eee', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    fontSize: 16,
  },
  btnEliminar: {
    backgroundColor: '#dc3545', 
    padding: 8,
    borderRadius: 50,
  },

  // === FOOTER / TOTAL ===
  footer: {
    paddingHorizontal: 15,
    backgroundColor: '#f8f6fa', 
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  totalTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  totalMonto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  btnPagar: {
    backgroundColor: ACCENT_COLOR, 
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: ACCENT_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  btnPagarTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* MODAL */
  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCaja: {
    width: '80%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    elevation: 10,
  },
  modalTexto: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtn: {
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  modalBtnCancelar: {
    backgroundColor: '#6c757d', 
  },
  modalBtnConfirmar: {
    backgroundColor: '#dc3545', 
  },
  modalBtnTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MiCarrito;