import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PURPLE_DARK = '#3b004f';
const LIGHT_BACKGROUND = '#f8f6fa';
const CARD_BLUE = '#1D1D1D';

const RealizarPago = () => {
  const navigation = useNavigation();

  const currentMonthYear = '09 / 2025'; 
  const finalAmount = '$15,000.00'; 

  const [isRobot, setIsRobot] = React.useState(false);
  const [agreedTerms, setAgreedTerms] = React.useState(false);

  const handlePagar = () => {
    if (!agreedTerms) {
        Alert.alert("Atención", "Debes aceptar los términos y condiciones.");
        return;
    }
    Alert.alert("¡Pago Exitoso!", "Tu transacción ha sido procesada correctamente.", [
        { text: "OK", onPress: () => navigation.navigate('Home') } 
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight: 10}}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.logo}>E</Text>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchText}>Buscar en Elisea</Text>
        </View>
        <Text style={styles.moreIcon}>⋮</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.titulo}>Pago en línea</Text> 
        <Text style={styles.h2}>Datos de Tarjeta</Text>

        <View style={styles.cardSection}>
          <View style={styles.resumenCard}>
            <View style={styles.resumenCardText}>
                <Text style={styles.resumenTitulo}>Resumen del pago:</Text> 
                <Text style={styles.resumenTexto}>Fecha: {currentMonthYear}</Text>
                <Text style={styles.resumenTexto}>Total: {finalAmount}</Text>
            </View>
          </View>
          <View style={styles.visualCard}>
            <Text style={styles.cardName}>NOMBRE TITULAR</Text>
            <Text style={styles.cardNumber}>**** **** **** 5678</Text>
            <View style={styles.cardDetails}>
                <View>
                    <Text style={styles.cardLabel}>Expiración</Text>
                    <Text style={styles.cardValue}>09/28</Text>
                </View>
                <View>
                    <Text style={styles.cardLabel}>CVC</Text>
                    <Text style={styles.cardValue}>***</Text>
                </View>
            </View>
            <Text style={styles.cardPlaceholder}>VISA</Text>
          </View>
        </View>

        <View style={styles.formSection}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Nombre del titular</Text>
                <TextInput style={styles.input} placeholder="Como aparece en la tarjeta" />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Número de tarjeta</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="0000 0000 0000 0000" 
                    keyboardType="numeric"
                    maxLength={16}
                />
            </View>

            <View style={styles.fila}>
                <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
                    <Text style={styles.label}>Expiración</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="MM/AA" 
                        keyboardType="numbers-and-punctuation"
                        maxLength={5}
                    />
                </View>
                <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
                    <Text style={styles.label}>CVC</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="123" 
                        keyboardType="numeric" 
                        maxLength={3}
                        secureTextEntry
                    />
                </View>
                <View style={[styles.formGroup, { flex: 1 }]}>
                    <Text style={styles.label}>C. Postal</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="00000" 
                        keyboardType="numeric" 
                        maxLength={5}
                    />
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="correo@ejemplo.com" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
        </View>

        <View style={styles.sugerencia}>
          <Text style={styles.sugerenciaTitulo}>! SUGERENCIA !</Text>
          <Text style={styles.sugerenciaTexto}>
            Recomendamos verificar tus datos antes de realizar el pago.
          </Text>
        </View>

        <View style={styles.checkboxes}>
          <TouchableOpacity style={styles.checkboxItem} onPress={() => setIsRobot(!isRobot)}>
            <Text style={[styles.checkboxIcon, { borderColor: isRobot ? PURPLE_DARK : '#333', backgroundColor: isRobot ? PURPLE_DARK : 'transparent', color: isRobot ? 'white' : 'transparent' }]}>
                ✓
            </Text>
            <Text style={styles.checkboxText}>No soy un robot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkboxItem} onPress={() => setAgreedTerms(!agreedTerms)}>
            <Text style={[styles.checkboxIcon, { borderColor: agreedTerms ? PURPLE_DARK : '#333', backgroundColor: agreedTerms ? PURPLE_DARK : 'transparent', color: agreedTerms ? 'white' : 'transparent' }]}>
                ✓
            </Text>
            <Text style={styles.checkboxText}>Aceptar términos y condiciones</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botones}>
          <TouchableOpacity 
            style={styles.botonCancelar}
            onPress={() => navigation.goBack()} 
          >
            <Text style={styles.botonCancelarTexto}>Cancelar ❌</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.botonPagar, { opacity: agreedTerms ? 1 : 0.6 }]}
            onPress={handlePagar} // Acción Pagar
            disabled={!agreedTerms}
          >
            <Text style={styles.botonPagarTexto}>Pagar →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Elisea | Pago Seguro</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: LIGHT_BACKGROUND },
  
  // === HEADER ===
  header: {
    backgroundColor: PURPLE_DARK,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40, // Ajuste para status bar
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 50,
    width: 32,
    height: 32,
    textAlign: 'center',
    lineHeight: 28,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white', 
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 35,
  },
  searchIcon: {
    fontSize: 14,
    color: PURPLE_DARK,
    marginRight: 5,
  },
  searchText: {
    color: '#888',
    fontSize: 14,
  },
  moreIcon: {
    color: 'white',
    fontSize: 24,
  },
  // === MAIN ===
  main: {
    padding: 20,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 5,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  
  // === SECCIÓN DE TARJETA ===
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resumenCard: {
    width: '40%',
    backgroundColor: '#fff3cd', 
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  resumenTitulo: {
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 5,
    fontSize: 12,
  },
  resumenTexto: {
    color: '#333',
    fontSize: 11,
    marginBottom: 2,
  },
  visualCard: {
    width: '56%',
    backgroundColor: CARD_BLUE, 
    borderRadius: 12,
    padding: 15,
    height: 140, 
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardName: {
    color: '#ccc',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginVertical: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: '#aaa',
    fontSize: 8,
    textTransform: 'uppercase',
  },
  cardValue: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardPlaceholder: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    fontStyle: 'italic',
  },
  
  // === FORMULARIO ===
  formSection: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 12,
  },
  label: {
    color: '#333',
    marginBottom: 5,
    fontWeight: '600',
    fontSize: 13,
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    fontSize: 14,
    color: '#333',
  },
  fila: {
    flexDirection: 'row',
  },
  // === SUGERENCIA ===
  sugerencia: {
    backgroundColor: '#e2e3e5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#383d41',
  },
  sugerenciaTitulo: {
    fontWeight: 'bold',
    color: '#383d41',
    fontSize: 12,
  },
  sugerenciaTexto: {
    color: '#383d41',
    marginTop: 2,
    fontSize: 12,
  },
  // === CHECKBOXES ===
  checkboxes: {
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxIcon: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 14,
    overflow: 'hidden',
  },
  checkboxText: {
    color: '#555',
    fontSize: 14,
  },
  // === BOTONES ===
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botonCancelar: {
    backgroundColor: '#dc3545', 
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
    elevation: 2,
  },
  botonCancelarTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botonPagar: {
    backgroundColor: '#28a745', 
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
    elevation: 2,
  },
  botonPagarTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#aaa',
    fontSize: 12,
  },
});

export default RealizarPago;