import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Personas = ({ value, onChange }) => {
  const increment = (type) => {
    if (type === 'minimo') {
      onChange({ ...value, minimo: value.minimo + 10 });
    } else {
      onChange({ ...value, maximo: value.maximo + 10 });
    }
  };

  const decrement = (type) => {
    if (type === 'minimo' && value.minimo > 0) {
      onChange({ ...value, minimo: value.minimo - 10 });
    } else if (type === 'maximo' && value.maximo > 10) {
      onChange({ ...value, maximo: value.maximo - 10 });
    }
  };

  return (
    <View style={styles.personasContainer}>
      <View style={styles.personasRow}>
        <View style={styles.personasLabel}>
          <Text style={styles.personasTitle}>Mínimo</Text>
          <Text style={styles.personasValue}>{value.minimo}</Text>
        </View>
        <View style={styles.personasControls}>
          <TouchableOpacity
            style={styles.personasButton}
            onPress={() => decrement('minimo')}
          >
            <Ionicons name="remove-circle" size={32} color="#C77DFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.personasButton}
            onPress={() => increment('minimo')}
          >
            <Ionicons name="add-circle" size={32} color="#C77DFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.personasRow}>
        <View style={styles.personasLabel}>
          <Text style={styles.personasTitle}>Máximo</Text>
          <Text style={styles.personasValue}>{value.maximo}</Text>
        </View>
        <View style={styles.personasControls}>
          <TouchableOpacity
            style={styles.personasButton}
            onPress={() => decrement('maximo')}
          >
            <Ionicons name="remove-circle" size={32} color="#C77DFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.personasButton}
            onPress={() => increment('maximo')}
          >
            <Ionicons name="add-circle" size={32} color="#C77DFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  personasContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  personasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  personasLabel: {
    flex: 1,
  },
  personasTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  personasValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  personasControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  personasButton: {
    padding: 4,
  },
  });

export default Personas;