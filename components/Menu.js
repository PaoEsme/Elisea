// components/SideMenu.js (o menu.js)
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const menuItems = [
  { label: 'Perfil', icon: <FontAwesome name="user" size={40} color="#FFFFFF" />, screen: 'Perfil_User' }, 
  { label: 'Favoritos', icon: <FontAwesome name="star" size={40} color="#FFFFFF" />, screen: 'Favoritos' },
  { label: 'Historial', icon: <FontAwesome name="history" size={40} color="#FFFFFF" />, screen: 'Historial' }, // 👈 Ya estaba bien
  { label: 'Cambiar Contraseña', icon: <FontAwesome name="lock" size={40} color="#FFFFFF" />, screen: 'CambiarContrasena' },
  // ... otros items ...
  { label: 'Política de Privacidad', icon: <FontAwesome name="shield" size={40} color="#FFFFFF" />, screen: 'Privacidad' },
  
  // 👇 CAMBIO AQUÍ: De 'Logout' a 'Cerrar_S'
  { label: 'Cerrar Sesión', icon: <MaterialIcons name="logout" size={40} color="#FFFFFF" />, screen: 'Cerrar_S' },
];

export default function SideMenu({ onClose }) {
  const navigation = useNavigation();

  const handleMenuPress = (screen) => {
    if (onClose) onClose();
    if (navigation) {
      navigation.navigate(screen);
    } else {
      console.warn('Navigation no disponible');
    }
  };

  return (
    <TouchableOpacity style={styles.overlay} onPress={onClose}>
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item.screen)}
            activeOpacity={0.7}
          >
            <View style={styles.icon}>{item.icon}</View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end', 
  },
  menu: {
    width: screenWidth * 0.75,
    backgroundColor: '#210535',
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#BB77AA',
    borderBottomWidth: 0.5,
  },
  icon: { marginRight: 15 },
  label: { color: '#FFFFFF', fontSize: 16 },
});