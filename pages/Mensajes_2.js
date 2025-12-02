import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const MESSAGES_DATA = [
  {
    id: "1",
    text: "Hola buenas, me gustaría ver los costos de su servicio de decoración. Sería para una boda ¿qué precios manjea?",
    time: "2:36 p.m.",
    sender: "user",
  },
  { id: "separator", text: "Hoy", type: "date_separator" },
  {
    id: "2",
    text: "hola buenas tardes!",
    time: "3:59 p.m.",
    sender: "provider",
  },
  {
    id: "3",
    text: "Claro, ahora le mando los precios que manejamos 🙌😎",
    time: "3:59 p.m.",
    sender: "provider",
  },
  {
    id: "4",
    text: `Decoración en salón techado
• Salón pequeño (50–80 invitados): desde $8,000 hasta $15,000 MXN
• Salón mediano (100–200 invitados): desde $20,000 hasta $35,000 MXN
• Salón grande (250–400 invitados o más): desde $45,000 hasta $70,000 MXN

Decoración en espacio al aire libre
• Evento pequeño (50–80 invitados): desde $12,000 hasta $20,000 MXN
• Evento mediano (100–200 invitados): desde $30,000 hasta $50,000 MXN

👉 Todos los paquetes incluyen decoración básica de centros de mesa, mesa principal, mantelería...

👉 En eventos al aire libre los costos suben un poco porque normalmente se requieren carpas...

Quedo a tus órdenes para armarte una propuesta personalizada según estilo (rústico, glam, boho o minimalista) y los detalles de tu evento. 💐✨`,
    time: "4:27 p.m.",
    sender: "provider",
  },
];

export default function Mensajes_2(props) {
  const [inputText, setInputText] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const navigation = useNavigation();

  const route = props.route || { params: {} };
  const params = route.params || { 
    nombre: "Proveedor Demo", 
  };
  const { nombre } = params;

  const renderItem = ({ item }) => {
    if (item.type === "date_separator") {
      return (
        <View style={styles.dateSeparator}>
          <View style={styles.line} />
          <Text style={styles.dateText}>{item.text}</Text>
          <View style={styles.line} />
        </View>
      );
    }
    const isUser = item.sender === "user";
    return (
      <View style={[styles.messageRow, isUser ? styles.rowRight : styles.rowLeft]}>
        {!isUser && <View style={styles.avatarSmall} />}
        <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleProvider]}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 1. CAPA INVISIBLE PARA CERRAR EL MENÚ (Solo aparece si el menú está abierto) */}
      {menuVisible && (
        <TouchableOpacity 
          style={styles.menuOverlay} 
          activeOpacity={1} 
          onPress={() => setMenuVisible(false)}
        />
      )}

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{nombre}</Text>
        </View>
        
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Ionicons name="ellipsis-vertical" size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* MENÚ FLOTANTE */}
      {menuVisible && (
        <View style={styles.popupMenu}>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => {
              setIsBlocked(!isBlocked);
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>
              {isBlocked ? "Desbloquear" : "Bloquear"}
            </Text>
            <Ionicons 
              name={isBlocked ? "lock-open-outline" : "ban-outline"} 
              size={20} 
              color="#EAD8EB" 
            />
          </TouchableOpacity>

          <View style={styles.menuSeparator} />

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              console.log("Acción: Reportar");
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Reportar</Text>
            <Ionicons name="alert-circle-outline" size={20} color="#EAD8EB" />
          </TouchableOpacity>
        </View>
      )}

      {/* CHAT CONTENT */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <FlatList
          data={MESSAGES_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          // TRUCO: Si arrastras la lista, el teclado se oculta solo
          keyboardDismissMode="on-drag" 
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={isBlocked ? "Usuario bloqueado" : "Escribe algo..."}
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
            multiline
            editable={!isBlocked}
          />
          <TouchableOpacity style={[styles.sendButton, { opacity: isBlocked ? 0.5 : 1 }]}>
            <Ionicons name="send" size={24} color="#8D6E9E" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight || 0,
  },
  // ESTILO NUEVO: La capa invisible que cubre todo
  menuOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50, // Debe estar debajo del menú (100) pero encima del chat
    backgroundColor: 'transparent', // Totalmente invisible
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#EAD8EB",
    zIndex: 60, // Encima del overlay
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A0E4E",
    marginLeft: 10,
  },
  popupMenu: {
    position: 'absolute',
    top: 60, 
    right: 10,
    backgroundColor: '#250A2F', 
    borderRadius: 10,
    paddingVertical: 5,
    width: 160,
    zIndex: 100, // Lo más alto de todo
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  menuText: {
    color: '#EAD8EB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuSeparator: {
    height: 1,
    backgroundColor: '#EAD8EB',
    opacity: 0.3,
    marginHorizontal: 10,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
  messageRow: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-end",
  },
  rowRight: { justifyContent: "flex-end" },
  rowLeft: { justifyContent: "flex-start" },
  avatarSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#D9D9D9",
    marginRight: 8,
    marginBottom: 5,
  },
  bubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 15,
  },
  bubbleUser: {
    backgroundColor: "#7A2E7A",
    borderBottomRightRadius: 2,
  },
  bubbleProvider: {
    backgroundColor: "#7E729E",
    borderTopLeftRadius: 2,
  },
  messageText: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 22,
  },
  timeText: {
    color: "#E0E0E0",
    fontSize: 11,
    alignSelf: "flex-end",
    marginTop: 5,
  },
  dateSeparator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#E0E0E0",
    flex: 1,
    marginHorizontal: 10,
  },
  dateText: {
    color: "#999",
    fontSize: 12,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#EAD8EB",
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 10,
    padding: 5,
  },
});