import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NOTIFICATIONS_DATA = [
  {
    id: '1',
    title: '[Nombre del proveedor]',
    message: 'Este proveedor ha actualizado sus productos ¡ven a verlos!',
    time: '12:00 PM',
  },
  {
    id: '2',
    title: '¡Nuevas tendencias!',
    message: '¡Nuevas decoraciones en tendencias, échales un vistazo!',
    time: '11:30 AM',
  },
  {
    id: '3',
    title: '[Nombre del proveedor]',
    message: 'Te mandó nuevos mensajes',
    time: '10:00 AM',
  },
  {
    id: '4',
    title: 'Notificaciones del sistema',
    message: 'Nueva actualizacion de la app!!!',
    time: '09:00 AM',
  },
];

const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.avatarCircle} />

    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemMessage}>{item.message}</Text>
    </View>

    <Text style={styles.itemTime}>{item.time}</Text>
  </View>
);

const ItemSeparator = () => <View style={styles.separator} />;

export default function NotificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.safeArea}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.title}>Notificaciones</Text>

        <FlatList
          data={NOTIFICATIONS_DATA}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            
            <TouchableOpacity 
              activeOpacity={0.6} 
              onPress={() => {
                navigation.navigate('Mensajes2', {
                  titulo: item.title,
                  mensaje: item.message,
                  fecha: item.time,
                  proveedor: item.title 
                });
              }}
            >
              <NotificationItem item={item} />
            </TouchableOpacity>

          )}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F0F0', 
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold',
    color: '#7B337D', 
    paddingHorizontal: 20,
    paddingTop: 20, 
    marginBottom: 20, 
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F0', 
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    backgroundColor: '#e0e0e0', 
    marginRight: 15, 
  },
  textContainer: {
    flex: 1, 
    marginRight: 10, 
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#440C4D99', 
  },
  itemMessage: {
    fontSize: 14,
    color: '#440C4D99', 
    marginTop: 2, 
  },
  itemTime: {
    fontSize: 12,
    color: '#440C4D99', 
    alignSelf: 'flex-start', 
    marginTop: 2, 
  },
  separator: {
    height: 1,
    backgroundColor: '#BB77AA99',
    marginHorizontal: 24,
  },
});