import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PURPLE_DARK = '#3b004f';
const ACCENT_COLOR = '#006B3E'; 

const userProfileImage = { uri: 'https://via.placeholder.com/80x80.png?text=Perfil' }; 

const PagoExitoso = () => {
  const navigation = useNavigation();
  const formatearFechaActualLegible = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date().toLocaleDateString('es-ES', options);
    return fecha.charAt(0).toUpperCase() + fecha.slice(1);
  };
  
  const fechaDeHoyLegible = formatearFechaActualLegible();
  
  const handleVolver = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
       
        <View style={styles.header}>
            <Text style={styles.logo}>E</Text>
            <View style={styles.searchBar}>
                <Text style={styles.searchIcon}>🔍</Text>
                <Text style={styles.searchText}>Buscar en Elisea</Text>
            </View>
            <TouchableOpacity onPress={handleVolver}>
              <Text style={styles.closeIcon}>❌</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.operacionTitulo}>Operación exitosa</Text>
        
        {/* Fecha de Transacción */}
        <View style={styles.fechaContainer}>
          <Text style={styles.fecha}>{fechaDeHoyLegible}</Text>
        </View>

        {/* Importe pagado */}
        <View style={styles.importeContainer}>
            <Text style={styles.importeTitulo}>Importe pagado</Text>
            <Text style={styles.importe}>$15,000.00</Text>
            <Text style={styles.comision}>Comisión: $0.00</Text>
        </View>
        
        <View style={styles.separador} />
        
        {/* Foto de Perfil */}
        <View style={styles.profileContainer}>
            <Image 
                source={userProfileImage} 
                style={styles.profileImage}
            />
        </View>

      </View>

      {/* MAIN CONTENT */}
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.datosContainer}>
          <Text style={styles.nombre}>Alison Ugalde Arias</Text>

          {/* Lineo de captura */}
          <View style={styles.datoItem}>
            <Text style={styles.datoTitulo}>Línea de captura</Text>
            <Text style={styles.datoValor}>AVNFJFNDJFNDJSFDSJFSJF</Text>
          </View>
          
          {/* Cuenta */}
          <View style={styles.datoItem}>
            <Text style={styles.datoTitulo}>Cuenta</Text>
            <View style={styles.datoItemMulti}>
                <Text style={styles.datoValor}>Tarjeta Débito Visa</Text>
                <Text style={styles.datoValorSmall}>• • • • 1234</Text>
            </View>
          </View>
          
          {/* Folio */}
          <View style={styles.datoItem}>
            <Text style={styles.datoTitulo}>Folio</Text>
            <Text style={styles.datoValor}>123456789</Text>
          </View>

          {/* Referencia */}
          <View style={styles.datoItem}>
            <Text style={styles.datoTitulo}>Referencia</Text>
            <Text style={styles.datoValor}>Pago Elisea #98765</Text>
          </View>
          
        </View>

        {/* Botón Volver */}
        <TouchableOpacity style={styles.btnVolver} onPress={handleVolver}>
            <Text style={styles.btnVolverTexto}>Volver a inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnCompartir}>
            <MaterialIcons name="share" size={20} color={ACCENT_COLOR} />
            <Text style={styles.btnCompartirTexto}>Compartir comprobante</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

// === STYLES ===
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
  // === TOP BACKGROUND MORADO ===
  topBackground: {
    backgroundColor: PURPLE_DARK,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 5,
  },
  
  // HEADER STYLES
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingTop: 40,
  },
  logo: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
  },
  searchBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: 10,
  },
  searchIcon: {
      fontSize: 16,
      color: '#aaa',
      marginRight: 5,
  },
  searchText: {
      color: '#aaa',
      fontSize: 14,
  },
  closeIcon: {
      color: 'white',
      fontSize: 18,
      marginLeft: 10,
  },

  operacionTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    marginTop: 0,
  },

  // === FECHA ===
  fechaContainer: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#4a1563', 
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  fecha: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // === IMPORTE ===
  importeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  importeTitulo: {
    color: '#ddd',
    fontSize: 16,
  },
  importe: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  comision: {
    color: '#ddd',
    fontSize: 14,
  },
  separador: {
    width: '80%',
    height: 1,
    backgroundColor: '#6a3683', 
    marginVertical: 20,
  },

  // === PERFIL ===
  profileContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 3,
    position: 'absolute',
    bottom: -35, 
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: PURPLE_DARK,
  },

  // === MAIN CONTENT ===
  main: {
    padding: 20,
    paddingTop: 45, 
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },

  // === DATOS DE PAGO ===
  datosContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 30,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 20,
    textAlign: 'center',
  },
  datoItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  datoItemMulti: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datoTitulo: {
    color: ACCENT_COLOR, 
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 13,
  },
  datoValor: {
    color: '#333',
    fontSize: 16,
  },
  datoValorSmall: {
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // === BOTONES FINALES ===
  btnVolver: {
    backgroundColor: ACCENT_COLOR, 
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
    shadowColor: ACCENT_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  btnVolverTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCompartir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  btnCompartirTexto: {
    color: ACCENT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default PagoExitoso;