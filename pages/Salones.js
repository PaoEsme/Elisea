import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const salones = [
  { id: '1', nombre: 'Salón Real', imagen: require('../assets/images/lugar1.jpeg') },
  { id: '2', nombre: 'Jardín Encanto', imagen: require('../assets/images/lugar2.jpeg') },
  { id: '3', nombre: 'Salón Imperial', imagen: require('../assets/images/lugar3.jpeg') },
  { id: '4', nombre: 'Jardín Aurora', imagen: require('../assets/images/lugar4.jpeg') },
];

export default function Salones({ route }) {
  const navigation = useNavigation();
  const filtros = route.params?.filtros;

  const salonesFiltered = salones.filter(salon => {
    if (!filtros) return true;
    
    let cumpleFiltros = true;
    
    if (filtros.precio) {
      cumpleFiltros = cumpleFiltros && true; 
    }
    
    if (filtros.capacidad) {
      cumpleFiltros = cumpleFiltros && true; 
    }
    
    if (filtros.ubicacion) {
      cumpleFiltros = cumpleFiltros && true;
    }
    
    return cumpleFiltros;
  });

  const renderSalon = ({ item }) => (
  <TouchableOpacity 
  style={styles.card}
  onPress={() => navigation.navigate('DetallesSalon', { salon: item })}
>
  <Image source={item.imagen} style={styles.image} resizeMode="cover" />
  <Text style={styles.title}>{item.nombre}</Text>
</TouchableOpacity>
);

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Salones</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Filtrado')}
          style={styles.filterButton}
        >
          <Ionicons name="filter" size={24} color="#6f2dbd" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={salonesFiltered}
        renderItem={renderSalon}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6f2dbd',
  },
  filterButton: {
    padding: 8,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 80, 
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f3f0ff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 120,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#2c005f',
    textAlign: 'center',
  },
});