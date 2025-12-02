import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
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
  { id: "1", text: "Hola buenas, me gustaría ver los costos de su servicio de decoración.", time: "2:36 p.m.", sender: "user" },
  { id: "separator", text: "Hoy", type: "date_separator" },
  { id: "2", text: "¡Hola buenas tardes!", time: "3:59 p.m.", sender: "provider" },
  { id: "3", text: "Claro, ahora le mando los precios que manejamos", time: "3:59 p.m.", sender: "provider" },
];

export default function Mensajes_2({ route }) {
  const [inputText, setInputText] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

  const navigation = useNavigation();
  const { nombre = "Proveedor Demo" } = route.params || {};

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
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{nombre}</Text>
        </View>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <FlatList
          data={MESSAGES_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
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
  menuOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50, 
    backgroundColor: 'transparent', 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#EAD8EB",
    zIndex: 60, 
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
    zIndex: 100, 
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