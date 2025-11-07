import { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 1.35; // puedes ajustar 1.35 si quieres más o menos curva


export default function ContraseñaSeguridadCambio({ onContinue }) {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);


    const HERO_IMAGE = require('../assets/images/img_fiesta.png');

  const handleContinue = () => {
      if (onContinue) {
        onContinue(); 
      }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.heroWrap}>
          <View style={styles.heroCircle}>
            <Image source={HERO_IMAGE} style={styles.heroImage} />
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Antes de cambiar tu contraseña</Text>
          <Text style={styles.subtitle}>
            Coloca tu contraseña actual. Esto lo hacemos por tu seguridad.
          </Text>

          <Text style={styles.label}>Contraseña</Text>

          <View style={styles.inputRow}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(0,0,0,0.25)"
              secureTextEntry={!visible}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setVisible((s) => !s)}
              style={styles.lockBtn}
              activeOpacity={0.7}
            >
              {/* Puedes reemplazar el emoji por un icono de vector si tienes librería */}
              <Text style={styles.lockIcon}>{visible ? '🔓' : '🔒'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cta} onPress={handleContinue} activeOpacity={0.9}>
            <Text style={styles.ctaText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 40, backgroundColor: '#fff' },

  /* HERO IMAGE - curva en la parte inferior */
heroWrap: {
  backgroundColor: '#fff',
  alignItems: 'center',
},

heroCircle: {
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  borderRadius: CIRCLE_SIZE / 2,
  overflow: 'hidden',
  marginTop: -CIRCLE_SIZE * 0.35, // ajusta cuánto “sube” el círculo
},

heroImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},

  content: { paddingHorizontal: 24, paddingTop: 24 },
  title: { fontSize: 18, fontWeight: '700', color: '#111', marginBottom: 10 },
  subtitle: { fontSize: 13, color: '#444', marginBottom: 18 },

  label: { color: '#b15aa8', fontWeight: '700', marginBottom: 8 },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3e9f3',
    borderRadius: 22,
    height: 44,
    paddingHorizontal: 12,
    borderWidth: 0.8,
    borderColor: '#e0cfe0',
    marginBottom: 22,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#222',
    paddingVertical: 8,
  },
  lockBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  lockIcon: { fontSize: 16 },

  cta: {
    alignSelf: 'center',
    backgroundColor: '#c78fc0',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 18,
    marginTop: 6,
    minWidth: 180,
  },
  ctaText: { color: '#fff', fontWeight: '700', textAlign: 'center' },
});
