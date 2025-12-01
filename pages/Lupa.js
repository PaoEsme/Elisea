import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const { width } = Dimensions.get('window');

const CatalogosScreen = ({ navigation }) => {
  const catalogos = [
    {
      id: 1,
      titulo: 'Salones',
      imagen: require('../assets/images/Salon.jpeg'),
      gradiente: ['rgba(128, 0, 128, 0.6)', 'rgba(148, 0, 211, 0.6)'],
      ruta: 'Salones',
    },
    {
      id: 2,
      titulo: 'Comida',
      imagen: require('../assets/images/Comida.jpeg'),
      gradiente: ['rgba(139, 69, 19, 0.5)', 'rgba(160, 82, 45, 0.5)'],
      ruta: 'Comida',
    },
    {
      id: 3,
      titulo: 'Equipamientos',
      imagen: require('../assets/images/Equipamiento.jpeg'), 
      gradiente: ['rgba(75, 0, 130, 0.6)', 'rgba(106, 13, 173, 0.6)'],
      ruta: 'Equipamientos',
    },
  ];

  const handleCatalogoPress = (catalogo) => {
    navigation.navigate(catalogo.ruta);
  };

  return (
    <View style={styles.container}>
        <Navbar />
      <View style={styles.header}>
        <Text style={styles.titulo}>Catálogos</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {catalogos.map((catalogo) => (
          <TouchableOpacity
            key={catalogo.id}
            style={styles.card}
            onPress={() => handleCatalogoPress(catalogo)}
            activeOpacity={0.9}
          >
            <ImageBackground
              source={catalogo.imagen}
              style={styles.imageBackground}
              imageStyle={styles.image}
            >
              <LinearGradient
                colors={catalogo.gradiente}
                style={styles.gradient}
              >
                <Text style={styles.cardTitulo}>{catalogo.titulo}</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7B2CBF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, 
  },
  card: {
    width: '100%',
    height: 180,
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 16,
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});

export default CatalogosScreen;