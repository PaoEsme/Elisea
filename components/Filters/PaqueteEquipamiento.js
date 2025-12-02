import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Paquete = ({ value, onChange, personas }) => {
  const PRECIO_POR_PAQUETE = 850; 
  const TAMANO_PAQUETE = 200;    

  useEffect(() => {
    if (personas && personas.maximo) {
      const numPaquetes = Math.ceil(personas.maximo / TAMANO_PAQUETE);
      const precioCalculado = numPaquetes * PRECIO_POR_PAQUETE;

      if (precioCalculado !== value) {
        onChange(precioCalculado);
      }
    }
  }, [personas]);

  const getDesglosePrecio = () => {
    if (!personas || !personas.maximo) {
      return { numPaquetes: 0, precioPorPersona: 0 };
    }
    
    const numPaquetes = Math.ceil(personas.maximo / TAMANO_PAQUETE);
    
    const precioPorPersona = personas.maximo > 0 
      ? (value / personas.maximo).toFixed(2) 
      : 0;
    
    return { numPaquetes, precioPorPersona };
  };

  const { numPaquetes, precioPorPersona } = getDesglosePrecio();

  return (
    <View style={styles.precioContainer}>
      <View style={styles.precioDisplay}>
        <Text style={styles.precioValue}>${value ? value.toLocaleString() : 0}</Text>
      </View>
      <Text style={styles.precioLabel}>Precio estimado del equipo</Text>
      
      {personas && personas.maximo > 0 && (
        <View style={styles.detallesContainer}>
          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Personas seleccionadas:</Text>
            <Text style={styles.detalleValue}>Hasta {personas.maximo}</Text>
          </View>
          
          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Paquetes necesarios:</Text>
            <Text style={styles.detalleValue}>
              {numPaquetes} ({numPaquetes * TAMANO_PAQUETE} cap.)
            </Text>
          </View>

          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Cálculo:</Text>
            <Text style={styles.detalleValue}>
              {numPaquetes} pqts × ${PRECIO_POR_PAQUETE}
            </Text>
          </View>
          
          <View style={styles.detalleItem}>
            <Text style={styles.detalleLabel}>Costo aprox. por persona:</Text>
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
    borderWidth: 1,
    borderColor: '#E8D5F2', 
  },
  precioValue: {
    fontSize: 28, 
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
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(123, 44, 191, 0.1)', 
    paddingBottom: 4,
  },
  detalleLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  detalleValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c005f',
    flex: 1,
    textAlign: 'right',
  },
});

export default Paquete;