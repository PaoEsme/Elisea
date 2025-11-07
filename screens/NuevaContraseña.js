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
    View,
} from 'react-native';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 1.35;

const HERO_IMAGE = require('../assets/images/img_fiesta.png');

export default function NuevaContrasena() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const handleActualizar = () => {
    console.log('Actualizar contraseña:', { password, confirm });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* IMAGEN SUPERIOR IGUAL QUE EN LA PRIMERA PANTALLA */}
        <View style={styles.heroWrap}>
          <View style={styles.heroCircle}>
            <Image source={HERO_IMAGE} style={styles.heroImage} />
          </View>
        </View>

        {/* CONTENIDO */}
        <View style={styles.content}>
          <Text style={styles.title}>Ingresa una nueva contraseña</Text>

          <Text style={styles.subtitle}>
            Crea una nueva contraseña. Debes usar una contraseña que no hayas utilizado anteriormente.
          </Text>

          {/* CONTRASEÑA */}
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(0,0,0,0.25)"
              secureTextEntry={!visible1}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setVisible1((s) => !s)}
              style={styles.lockBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.lockIcon}>{visible1 ? '🔓' : '🔒'}</Text>
            </TouchableOpacity>
          </View>

          {/* CONFIRMAR CONTRASEÑA */}
          <Text style={styles.label}>Confirmar contraseña</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(0,0,0,0.25)"
              secureTextEntry={!visible2}
              value={confirm}
              onChangeText={setConfirm}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setVisible2((s) => !s)}
              style={styles.lockBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.lockIcon}>{visible2 ? '🔓' : '🔒'}</Text>
            </TouchableOpacity>
          </View>

          {/* BOTÓN ACTUALIZAR */}
          <TouchableOpacity style={styles.cta} onPress={handleActualizar} activeOpacity={0.9}>
            <Text style={styles.ctaText}>Actualizar contraseña</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 40, backgroundColor: '#fff' },

  heroWrap: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heroCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    overflow: 'hidden',
    marginTop: -CIRCLE_SIZE * 0.35,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  content: { paddingHorizontal: 24, paddingTop: 24 },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    marginBottom: 22,
  },

  label: {
    color: '#b15aa8',
    fontWeight: '700',
    marginBottom: 8,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3e9f3',
    borderRadius: 22,
    height: 44,
    paddingHorizontal: 12,
    borderWidth: 0.8,
    borderColor: '#e0cfe0',
    marginBottom: 18,
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
    marginTop: 8,
    minWidth: 220,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
