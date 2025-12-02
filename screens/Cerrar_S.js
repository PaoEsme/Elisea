import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#006B3E'; 

const userData = {
  nombre: 'Alison Ugalde Arras',
  email: 'alison.ugalde@elisea.com',
  fotoUrl: 'https://via.placeholder.com/150/3b004f/FFFFFF?text=AU', 
};

const CerrarSesion = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres salir?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sí, Salir", 
          style: "destructive",
          onPress: () => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Navbar />
       <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={28} color={PURPLE_DARK} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Mi Cuenta</Text>
            <View style={{width: 28}} /> 
       </View>

      <View style={styles.content}>
        <View style={styles.userInfo}>
            <Image source={{ uri: userData.fotoUrl }} style={styles.avatar} />
            <Text style={styles.userName}>{userData.nombre}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
        </View>

        <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>General</Text>
            
            <TouchableOpacity style={styles.settingItem}>
                <View style={styles.itemLeft}>
                    <MaterialIcons name="person" size={24} color={PURPLE_DARK} />
                    <Text style={styles.settingText}>Editar Perfil</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
                <View style={styles.itemLeft}>
                    <MaterialIcons name="notifications" size={24} color={PURPLE_DARK} />
                    <Text style={styles.settingText}>Notificaciones</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#ccc" />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.logoutText}>Cerrar Sesión Actual</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Versión 1.0.5</Text>
      </View>
      < Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: PURPLE_DARK,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  settingsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
    textTransform: 'uppercase',
    marginLeft: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
    fontSize: 12,
  },
});

export default CerrarSesion;