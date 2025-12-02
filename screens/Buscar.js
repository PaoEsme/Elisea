import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ITEMS = [
  {
    id: 'salones',
    title: 'Salones',
    image: require('../assets/images/salones.jpeg'),
    screen: 'SalonesTab',
  },
  {
    id: 'comida',
    title: 'Comida',
    image: require('../assets/images/comida.jpg'),
    screen: 'Comida',
  },
  {
    id: 'equipamientos',
    title: 'Equipamentos',
    image: require('../assets/images/equipo.jpg'),
    screen: 'Equipamientos',
  },
];

export default function Buscar() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            {/* Título con flecha */}
            <View style={styles.titleRow}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color="#7a1b7e" />
              </TouchableOpacity>
              <Text style={styles.title}>Catálogos</Text>
            </View>

            {/* Tarjetas */}
            {ITEMS.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={styles.cardWrapper}
                onPress={() => handlePress(item)}
              >
                <ImageBackground
                  source={item.image}
                  style={styles.cardImage}
                  imageStyle={styles.cardImageRadius}
                >
                  <View style={styles.overlay} />
                  <Text style={styles.cardText}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flex: 1, 
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-start', 
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#7a1b7e',
    textAlign: 'left',
    marginLeft: 10,
  },
  backButton: {
    padding: 4,
  },
  cardWrapper: {
    marginBottom: 25,
    borderRadius: 16,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cardImage: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageRadius: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(122, 27, 126, 0.6)',
    borderRadius: 16,
  },
  cardText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});