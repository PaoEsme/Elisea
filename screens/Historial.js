import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#006B3E'; 

const historialData = [
  { 
    id: '1', 
    titulo: 'Salón Fresita - Reserva', 
    fecha: '26 Nov 2025', 
    monto: 5000.00, 
    estado: 'Completado', 
    icon: 'event-available' 
  },
  { 
    id: '2', 
    titulo: 'Decoración Floral', 
    fecha: '15 Nov 2025', 
    monto: 2000.00, 
    estado: 'Completado', 
    icon: 'local-florist' 
  },
  { 
    id: '3', 
    titulo: 'Menú de Banquetes Premium', 
    fecha: '01 Nov 2025', 
    monto: 7500.00, 
    estado: 'Completado', 
    icon: 'restaurant-menu' 
  },
];

const Historial = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemIcon}>
        <MaterialIcons name={item.icon} size={30} color={PURPLE_DARK} />
      </View>
      <View style={styles.itemDetalles}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemFecha}>{item.fecha}</Text>
        <Text style={styles.itemEstado}>{item.estado}</Text>
      </View>
      <View style={styles.itemPrecio}>
        <Text style={styles.precioTexto}>${item.monto.toFixed(2)}</Text>
        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight: 10}}>
             <MaterialIcons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.logo}>E</Text>
        <Text style={styles.titulo}>Mi Historial</Text>
        <TouchableOpacity style={styles.filterButton}>
             <MaterialIcons name="filter-list" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text style={styles.subtitulo}>Transacciones Recientes</Text>
        <FlatList
          data={historialData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      < Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
  header: {
    backgroundColor: PURPLE_DARK,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    width: 35,
    height: 35,
    textAlign: 'center',
    lineHeight: 32,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  filterButton: {
    padding: 5,
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 15,
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemIcon: {
    marginRight: 15,
    backgroundColor: '#f3e5f5',
    padding: 10,
    borderRadius: 10,
  },
  itemDetalles: {
    flex: 1,
  },
  itemTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  itemFecha: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  itemEstado: {
    fontSize: 12,
    color: ACCENT_COLOR,
    marginTop: 2,
    fontWeight: '600',
  },
  itemPrecio: {
    alignItems: 'flex-end',
  },
  precioTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
});

export default Historial;