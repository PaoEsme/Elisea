import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from './Menu';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation(); 

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../assets/images/Elisea.png')}
          style={styles.logo}
        />

        <TouchableOpacity
          style={styles.searchBar}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HistorialBusqueda')} 
        >
        <Ionicons name="search" size={18} color="#7A2E7A" style={styles.searchIcon} />
          <Text style={styles.searchText}>Buscar en Elisea</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="ellipsis-vertical" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Menu onClose={() => setMenuVisible(false)} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#210535',
    paddingBottom: 10, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    height: 60,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#BB77AA',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#DECEE6',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 35,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchText: {
    color: '#210535',
    fontSize: 14,
  },
});