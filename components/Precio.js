import { StyleSheet, Text, View } from 'react-native';

export const Precios = ({ value, onChange }) => {
  return (
    <View style={styles.precioContainer}>
      <View style={styles.precioDisplay}>
        <Text style={styles.precioValue}>${value.toLocaleString()}</Text>
      </View>
      <Text style={styles.precioLabel}>Precio máximo por evento</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    precioContainer: {
    alignItems: 'center',
  },
  precioDisplay: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 8,
  },
  precioValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  precioLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default Precios;