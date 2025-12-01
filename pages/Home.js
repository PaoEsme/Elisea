import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const navigation = useNavigation();

  const paraTiData = [
    { id: '1', title: 'Paraíso 1', image: require('../assets/images/ficha1.jpeg') },
    { id: '2', title: 'Paraíso 2', image: require('../assets/images/ficha2.jpeg') },
    { id: '3', title: 'Paraíso 3', image: require('../assets/images/ficha3.jpeg') },
  ];

  const sugerenciasData = [
    { id: 'a', image: require('../assets/images/lugar1.jpeg') },
    { id: 'b', image: require('../assets/images/lugar2.jpeg') },
    { id: 'c', image: require('../assets/images/lugar3.jpeg') },
    { id: 'd', image: require('../assets/images/lugar4.jpeg') },
  ];

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Sección PARA TI */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>PARA TI</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AgregarFicha')}>
              <FontAwesome name="plus" size={20} color="#210535" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={paraTiData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.cardHorizontal}
                onPress={() => navigation.navigate('DetalleFicha', { id: item.id })}
              >
                <Image source={item.image} style={styles.imageCard} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Sección PUEDE SER QUE TE GUSTE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PUEDE SER QUE TE GUSTE</Text>
          <View style={styles.grid}>
            {sugerenciasData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.cardGrid}
                onPress={() => navigation.navigate('DetalleLugar', { id: item.id })}
              >
                <Image source={item.image} style={styles.imageCard} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DECEE6',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#210535',
  },
  cardHorizontal: {
    marginRight: 15,
    width: 140,
    height: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginTop: 5,
    color: '#210535',
    fontSize: 14,
    fontWeight: '600',
  },
  imageCard: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardGrid: {
    width: '48%',
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
});
