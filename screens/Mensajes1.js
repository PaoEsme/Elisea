// screens/ChatsScreen.js
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const chatsData = [
  {
    id: "1",
    nombre: "Proveedor 1",
    mensaje: "Decoración en el salón techado...",
    hora: "10:30 a.m.",
    tieneNotificacion: true,
  },
  {
    id: "2",
    nombre: "Proveedor 2",
    mensaje: "Hola buenas ¿está disponible en oct...",
    hora: "11:00 a.m.",
    tieneNotificacion: false,
  },
  {
    id: "3",
    nombre: "Proveedor 3",
    mensaje: "Hola me interesan sus decoraciones...",
    hora: "11:15 a.m.",
    tieneNotificacion: false,
  },
  {
    id: "4",
    nombre: "Proveedor 4",
    mensaje: "¡Gracias por utilizar nuestro servicio!",
    hora: "11:30 a.m.",
    tieneNotificacion: true,
  },
];

export default function ChatsScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.chatItem} 
      activeOpacity={0.5} 
      onPress={() => {
        navigation.navigate('Mensajes2', {
          nombre: item.nombre,
          mensaje: item.mensaje,
          hora: item.hora
        });
      }}
    >
      <View style={styles.avatarContainer}>
        <View style={styles.avatarPlaceholder} />
        {item.tieneNotificacion && <View style={styles.notificationDot} />}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.nombre}</Text>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.mensaje}
        </Text>
      </View>

      <Text style={styles.timeText}>{item.hora}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <Text style={styles.subtitle}>Mensajes</Text>
      </View>

      <FlatList
        data={chatsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#ffffff",
  },

  header: { 
    paddingHorizontal: 20, 
    marginBottom: 10, 
    marginTop: 10 },

  title: { 
    fontSize: 32, 
    fontWeight: "bold",
    color: "#7A2E7A", 
    marginBottom: 5 },

  subtitle: { 
    fontSize: 16, 
    color: "#888", 
    fontWeight: "400" },
  listContent: { paddingBottom: 20 },

  chatItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 15, 
    paddingHorizontal: 20 },

  avatarContainer: { 
    position: "relative", 
    marginRight: 15 },

  avatarPlaceholder: { 
    width: 55, 
    height: 55, 
    borderRadius: 27.5, 
    backgroundColor: "#D9D9D9" },

  notificationDot: { 
    position: "absolute", 
    top: 0, 
    right: 0, 
    width: 14, 
    height: 14, 
    borderRadius: 7, 
    backgroundColor: "#76D72F", 
    borderWidth: 2, 
    borderColor: "#ffffff" },

  textContainer: { 
    flex: 1, 
    justifyContent: "center" },

  nameText: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#333", 
    marginBottom: 2 },

  messageText: { 
    fontSize: 14, 
    color: "#D48FD1", 
    fontWeight: "500" },

  timeText: { 
    fontSize: 12, 
    color: "#999", 
    marginLeft: 10 },
});
