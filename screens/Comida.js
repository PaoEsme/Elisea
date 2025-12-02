import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const serviciosComida = [
  { id: '1', nombre: 'Banquete Gourmet', imagen: require('../assets/images/comida.jpg') },
  { id: '2', nombre: 'Taquiza Tradicional', imagen: require('../assets/images/comida.jpg') },
  { id: '3', nombre: 'Buffet Internacional', imagen: require('../assets/images/comida.jpg') },
  { id: '4', nombre: 'Servicio de Bartender', imagen: require('../assets/images/comida.jpg') },
];

export default function Comida({ route }) {
  const navigation = useNavigation();
  const filtros = route.params?.filtros;

  const comidaFiltrada = serviciosComida.filter(item => {
    if (!filtros) return true;
    let cumpleFiltros = true;
    if (filtros.precio) {
      cumpleFiltros = cumpleFiltros && true;
    }
    return cumpleFiltros;
  });

  const renderComida = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('DetallesComida', { comida: item })}
    >
      <Image source={item.imagen} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#6f2dbd" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Comida</Text>
        </View>

        <TouchableOpacity 
          onPress={() => navigation.navigate('ComidaFiltrado')}
          style={styles.filterButton}
          activeOpacity={0.7}
        >
          <Ionicons name="filter" size={24} color="#6f2dbd" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={comidaFiltrada}
        renderItem={renderComida}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 10, padding: 4 },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6f2dbd',
    textTransform: 'uppercase',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f3f0ff',
    borderRadius: 8,
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
    shadowOffset: { width: 0, height: 2 },
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
