import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Lugar = ({ value, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(!value);

  const lugares = [
    { id: 1, nombre: 'Peña de Bernal', detalle: '23 de Noviembre - 300 personas' },
    { id: 2, nombre: 'Santiago de Querétaro', detalle: 'Descubre qué hay a tu alrededor' },
    { id: 3, nombre: 'San Juan del Río', detalle: '' },
  ];

  return (
    <View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar destinos"
          value={value}
          onChangeText={(text) => {
            onChange(text);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
      </View>

      {showSuggestions && (
        <View style={styles.suggestionsContainer}>
          <Text style={styles.sectionTitle}>Búsquedas recientes</Text>
          {lugares.map((lugar) => (
            <TouchableOpacity
              key={lugar.id}
              style={styles.suggestionItem}
              onPress={() => {
                onChange(lugar.nombre);
                setShowSuggestions(false);
              }}
            >
              <Ionicons name="location" size={24} color="#C77DFF" />
              <View style={styles.suggestionText}>
                <Text style={styles.suggestionTitle}>{lugar.nombre}</Text>
                {lugar.detalle ? (
                  <Text style={styles.suggestionDetail}>{lugar.detalle}</Text>
                ) : null}
              </View>
            </TouchableOpacity>
          ))}

          <Text style={styles.sectionTitle}>Sugerencias de destinos</Text>
          <TouchableOpacity style={styles.suggestionItem}>
            <Ionicons name="navigate" size={24} color="#C77DFF" />
            <Text style={styles.suggestionTitle}>Por la zona</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Lugar Filter
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  suggestionsContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 12,
    marginBottom: 8,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  suggestionText: {
    marginLeft: 12,
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  suggestionDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default Lugar;