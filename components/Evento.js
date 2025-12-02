import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Eventos = ({ value, onChange }) => {
  const eventos = [
    { id: 1, nombre: 'Cumpleaños', icon: 'gift' },
    { id: 2, nombre: 'XV años', icon: 'balloon' },
    { id: 3, nombre: 'Bodas', icon: 'heart' },
    { id: 4, nombre: 'Graduaciones', icon: 'school' },
    { id: 5, nombre: 'General', icon: 'people' },
  ];

  return (
    <View>
      {eventos.map((evento) => (
        <TouchableOpacity
          key={evento.id}
          style={[
            styles.optionItem,
            value === evento.nombre && styles.optionItemSelected,
          ]}
          onPress={() => onChange(evento.nombre)}
        >
          <Ionicons
            name={evento.icon}
            size={24}
            color={value === evento.nombre ? '#7B2CBF' : '#C77DFF'}
          />
          <Text style={styles.optionText}>{evento.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Eventos;