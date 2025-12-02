import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos faltantes', 'Ingresa correo y contraseña.');
      return;
    }

    setLoading(true);
    try {
      const q = query(
        collection(db, 'usuarios'),
        where('correo', '==', email.trim().toLowerCase()),
        where('contraseña', '==', password)
      );
      const snap = await getDocs(q);

      if (snap.empty) {
        Alert.alert('Error', 'Correo o contraseña incorrectos.');
        return;
      }

      // Puedes guardar datos del usuario aquí si luego usas contexto
      // const userDoc = snap.docs[0].data();

      navigation.replace('Home'); // misma ruta que ya usabas
    } catch (err) {
      console.error('Error en login:', err);
      Alert.alert('Error', 'No se pudo iniciar sesión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.bannerContainer}>
            <Image
              source={require('../assets/images/Login.png')}
              style={styles.banner}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

          <View style={styles.inputContainer}>
            <FontAwesome name="envelope" size={20} color="#210535" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              placeholderTextColor="#BB77AA"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Entypo name="lock" size={20} color="#210535" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#BB77AA"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ContrasenaSeguridad')}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Entrando...' : 'ENTRAR'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.register}>
              ¿No cuentas con una cuenta? <Text style={styles.link}>Regístrate aquí</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DECEE6',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bannerContainer: {
    width: windowWidth + 10,
    height: 300,
    overflow: 'hidden',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'StoryScript',
    fontSize: 24,
    color: '#210535',
  },
  subtitle: {
    fontSize: 16,
    color: '#210535',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#210535',
  },
  link: {
    color: '#210535',
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#210535',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  register: {
    marginTop: 20,
    color: '#210535',
    textAlign: 'center',
  },
});
