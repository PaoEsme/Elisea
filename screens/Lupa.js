// screens/Catalogos.js
import React from 'react';
import {
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ITEMS = [
  {
    id: 'salones',
    title: 'Salones',
    image: require('../assets/images/salones.jpeg'),
  },
  {
    id: 'comida',
    title: 'Comida',
    image: require('../assets/images/comida.jpg'),
  },
  {
    id: 'equipamentos',
    title: 'Equipamentos',
    image: require('../assets/images/equipo.jpg'),
  },
];

export default function Catalogos({ onSelect }) {
  const handlePress = (id) => {
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false} // Oculta la barra de scroll para limpieza visual
      >
        <View style={styles.content}>
          {/* Título */}
          <Text style={styles.title}>Catálogos</Text>

          {/* Tarjetas */}
          {ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8} // Un poco más suave al presionar
              style={styles.cardWrapper}
              onPress={() => handlePress(item.id)}
            >
              <ImageBackground
                source={item.image}
                style={styles.cardImage}
                imageStyle={styles.cardImageRadius}
              >
                {/* Capa morada */}
                <View style={styles.overlay} />
                <Text style={styles.cardText}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // CLAVE 1: Esto permite que el contenido se estire y se pueda centrar
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', 
  },
  content: {
    paddingHorizontal: 30, // Más espacio a los lados (menos ancho = más elegante)
    paddingVertical: 20,
  },
  title: {
    fontSize: 26, // Un poco más grande
    fontWeight: '800', // Más grueso
    color: '#7a1b7e',
    marginBottom: 30, // Más separación del título a la primera tarjeta
    textAlign: 'left', // O 'center' si prefieres
  },
  cardWrapper: {
    marginBottom: 25, // Más espacio entre tarjetas
    // CLAVE 2: Sombras para darle profundidad (efecto 3D sutil)
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
    height: 150, // Un pelín más alto se ve mejor
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageRadius: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(122, 27, 126, 0.6)', // Ajuste leve de opacidad
    borderRadius: 16,
  },
  cardText: {
    color: '#fff',
    fontSize: 22, // Texto un poco más grande
    fontWeight: 'bold',
    letterSpacing: 0.5, // Un poco de espacio entre letras se ve más premium
  },
});