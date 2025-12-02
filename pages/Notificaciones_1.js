import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// 1. Importamos el gancho de navegación
import { useNavigation } from "@react-navigation/native";

// --- DATOS DE EJEMPLO ---
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

// Componente visual de la fila
const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    {/* Círculo gris */}
    <View style={styles.avatarCircle} />

    {/* Textos */}
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemMessage}>{item.message}</Text>
    </View>

    {/* Hora */}
    <Text style={styles.itemTime}>{item.time}</Text>
  </View>
);

const ItemSeparator = () => <View style={styles.separator} />;

export default function NotificationScreen() {
  // 2. Activamos la navegación
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Notificaciones</Text>

        <FlatList
          data={NOTIFICATIONS_DATA}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            
            // 3. El botón que envuelve la notificación
            <TouchableOpacity 
              activeOpacity={0.6} // Efecto visual de presión
              onPress={() => {
                // Navegamos a 'NotificacionDetalle' (así la llamamos en tu index.tsx)
                navigation.navigate('NotificacionDetalle', {
                  // Enviamos los datos del item actual
                  titulo: item.title,
                  mensaje: item.message,
                  fecha: item.time,
                  proveedor: item.title // Usamos el título como nombre de proveedor por ahora
                });
              }}
            >
              <NotificationItem item={item} />
            </TouchableOpacity>

          )}
        />
      </View>
    </SafeAreaView>
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
    backgroundColor: '#F0F0F0', // Mismo fondo para que no se vea corte
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