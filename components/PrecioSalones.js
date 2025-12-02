import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Precios = ({ value, onChange, personas }) => {
  const PRECIO_BASE = 1500;
  const PERSONAS_POR_INCREMENTO = 50;

  useEffect(() => {
    if (personas && personas.maximo) {

      const incrementos = Math.ceil(personas.maximo / PERSONAS_POR_INCREMENTO);
      const precioCalculado = incrementos * PRECIO_BASE;
      
      if (precioCalculado !== value) {
        onChange(precioCalculado);
      }
    }
  }, [personas]);

  const getDesglosePrecio = () => {
    if (!personas || !personas.maximo) {
      return { incrementos: 0, precioPorPersona: 0 };
    }
    
    const incrementos = Math.ceil(personas.maximo / PERSONAS_POR_INCREMENTO);
    const precioPorPersona = (value / personas.maximo).toFixed(2);
    
    return { incrementos, precioPorPersona };
  };

  const { incrementos, precioPorPersona } = getDesglosePrecio();

  return (
    <View style={styles.precioContainer}>
      <View style={styles.precioDisplay}>
        <Text style={styles.precioValue}>${value.toLocaleString()}</Text>
      </View>
      <Text style={styles.precioLabel}>Precio máximo por evento</Text>
      
      {personas && personas.maximo > 0 && (
        <View style={styles.detallesContainer}>
          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Capacidad máxima:</Text>
            <Text style={styles.detalleValue}>{personas.maximo} personas</Text>
          </View>
          
          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Cálculo:</Text>
            <Text style={styles.detalleValue}>
              {incrementos} × $500
            </Text>
          </View>
          
          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Precio por persona:</Text>
            <Text style={styles.detalleValue}>${precioPorPersona}</Text>
          </View>
        </View>
      )}
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
    color: '#7B2CBF',
  },
  precioLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  detallesContainer: {
    backgroundColor: '#F3E8FF',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    marginTop: 8,
  },
  detalleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detalleLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  detalleValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'right',
  },
});

export default Precios;