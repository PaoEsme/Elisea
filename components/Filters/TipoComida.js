import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const TipoComida = ({ value, onChange }) => {
  const tipos = [
    { id: 1, nombre: 'Banquetes', icon: 'restaurant-outline' },
    { id: 2, nombre: 'Buffet', icon: 'fast-food-outline' },
    { id: 3, nombre: 'Carritos', icon: 'cart-outline' },
    { id: 4, nombre: 'Postres', icon: 'ice-cream-outline' },
    { id: 5, nombre: 'Bebidas', icon: 'wine-outline' },
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
          activeOpacity={0.7}
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
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
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
    fontWeight: '500',
  },
});

export default TipoComida;
