import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Tipo = ({ value, onChange }) => {
  const tipos = [
    { id: 1, nombre: 'Salones Cerrados', icon: 'business' },
    { id: 2, nombre: 'Jardines', icon: 'leaf' },
  ];

  return (
    <View>
      {tipos.map((tipo) => (
        <TouchableOpacity
          key={tipo.id}
          style={[
            styles.optionItem,
            value === tipo.nombre && styles.optionItemSelected,
          ]}
          onPress={() => onChange(tipo.nombre)}
        >
          <Ionicons
            name={tipo.icon}
            size={24}
            color={value === tipo.nombre ? '#7B2CBF' : '#C77DFF'}
          />
          <Text style={styles.optionText}>{tipo.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  // Tipo y Evento Filter
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  optionItemSelected: {
    backgroundColor: '#F3E8FF',
    borderWidth: 2,
    borderColor: '#7B2CBF',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000',
  },
});

export default Tipo;