import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function HistorialBusqueda({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    saveHistory();
  }, [history]);

  const loadHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem('@search_history');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const saveHistory = async () => {
    try {
      await AsyncStorage.setItem('@search_history', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving history:', error);
    }
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      const newSearch = {
        id: Date.now().toString(),
        text: searchText.trim(),
        timestamp: new Date().toISOString(),
      };
      
      setHistory([newSearch, ...history.filter(item => item.text !== searchText.trim())].slice(0, 20));
      console.log("Buscando:", searchText);
      
      setSearchText("");
      Keyboard.dismiss();
    }
  };

  const selectHistoryItem = (text) => {
    setSearchText(text);
  };

  const deleteItem = (id) => {
    setHistory((prevHistory) => prevHistory.filter((item) => item.id !== id));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Justo ahora';
    if (diffMins < 60) return `Hace ${diffMins} min`;
    if (diffHours < 24) return `Hace ${diffHours}h`;
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    return past.toLocaleDateString();
  };

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyIconContainer}>
        <Ionicons name="time-outline" size={24} color="#7A2E7A" />
      </View>

      <TouchableOpacity 
        style={styles.historyTextContainer}
        onPress={() => selectHistoryItem(item.text)}
      >
        <Text style={styles.historyText}>{item.text}</Text>
        <Text style={styles.timestampText}>{getTimeAgo(item.timestamp)}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSearchText(item.text)} style={{marginRight: 15}}>
        <Ionicons name="arrow-up-outline" size={20} color="#7A2E7A" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Ionicons name="close" size={18} color="#999" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

      <View style={styles.searchContainer}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#7A2E7A" />
        </TouchableOpacity>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#7A2E7A" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Buscar en Elisea"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            autoFocus={true} 
            returnKeyType="search"
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.content}>
        {history.length > 0 ? (
          <>
            <View style={styles.headerRow}>
              <Text style={styles.historyTitle}>Búsquedas recientes</Text>
              <TouchableOpacity onPress={clearHistory}>
                <Text style={styles.clearHistoryText}>Eliminar todo</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={history}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
              keyboardShouldPersistTaps="handled"
            />
          </>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={64} color="#D9D9D9" />
            <Text style={styles.emptyText}>No hay búsquedas recientes</Text>
            <Text style={styles.emptySubtext}>
              Explora servicios, salones y más...
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchContainer: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10, 
  },
  backButton: {
    marginRight: 10,
    padding: 5,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAD8EB",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#210535',
  },
  clearHistoryText: {
    color: "#7A2E7A",
    fontSize: 13,
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 20,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  historyIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F0E6F6",
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyTextContainer: {
    flex: 1,
  },
  historyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#210535",
    marginBottom: 2,
  },
  timestampText: {
    fontSize: 12,
    color: "#999",
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: -50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#210535',
    marginTop: 20,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});