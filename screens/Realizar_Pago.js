// screens/PagoTarjeta.js

import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PagoTarjeta = () => {
  // Función para formatear la fecha actual
  const formatearFecha = () => {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia} / ${mes} / ${año}`;
  };

  const currentMonthYear = '09 / 2025'; // Simulación de fecha de resumen
  const finalAmount = '$15,000.00'; // Simulación de monto

  // Simulaciones de estado para los checkboxes
  const [isRobot, setIsRobot] = React.useState(false);
  const [agreedTerms, setAgreedTerms] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* 🛑 HEADER - Diseño de la Imagen 🛑 */}
      <View style={styles.header}>
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

        {/* 🛑 TARJETA DE CRÉDITO VISUAL 🛑 */}
        <View style={styles.cardSection}>
          <View style={styles.resumenCard}>
            <View style={styles.resumenCardText}>
                <Text style={styles.resumenTitulo}>Resumen del pago:</Text> 
                <Text style={styles.resumenTexto}>Fecha en la que se realiza: {currentMonthYear}</Text>
                <Text style={styles.resumenTexto}>Monto final: {finalAmount}</Text>
            </View>
          </View>
          <View style={styles.visualCard}>
            <Text style={styles.cardName}>Nombre del titular</Text>
            <Text style={styles.cardNumber}>1234 5678 1234 5678</Text>
            <View style={styles.cardDetails}>
                <Text style={styles.cardLabel}>Expiración</Text>
                <Text style={styles.cardValue}>MM/YY</Text>
                <Text style={styles.cardLabel}>C. Seguridad</Text>
                <Text style={styles.cardValue}>***</Text>
            </View>
            <Text style={styles.cardPlaceholder}>LOGO DE TARJETA HERE</Text>
          </View>
        </View>

        {/* Campos de Formulario */}
        <View style={styles.formSection}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Nombre del titular</Text>
                <TextInput style={styles.input} placeholder="Ingrese nombre" />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Apellido del titular</Text>
                <TextInput style={styles.input} placeholder="Ingrese apellido" />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Número de tarjeta</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="0000 0000 0000 0000" 
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.fila}>
                <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
                    <Text style={styles.label}>Expiración (mm/aa)</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="MM/AA" 
                    keyboardType="numbers-and-punctuation"
                    />
                </View>
                <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
                    <Text style={styles.label}>C. de seguridad</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="CVC" 
                    keyboardType="numeric" 
                    maxLength={3}
                    />
                </View>
                <View style={[styles.formGroup, { flex: 1 }]}>
                    <Text style={styles.label}>C. postal</Text>
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

            <View style={styles.formGroup}>
                <Text style={styles.label}>Teléfono</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="+52 ..." 
                    keyboardType="phone-pad"    
                />
            </View>
        </View>

        {/* Sugerencia */}
        <View style={styles.sugerencia}>
          <Text style={styles.sugerenciaTitulo}>! SUGERENCIA !</Text>
          <Text style={styles.sugerenciaTexto}>
            Recomendamos que verifiques una última vez para posteriormente realizar el pago
          </Text>
        </View>

        {/* Checkboxes con iconos de simulación */}
        <View style={styles.checkboxes}>
          <TouchableOpacity style={styles.checkboxItem} onPress={() => setIsRobot(!isRobot)}>
            <Text style={[styles.checkboxIcon, { borderColor: isRobot ? PURPLE_DARK : '#333' }]}>
                {isRobot ? '✓' : ''}
            </Text>
            <Text style={styles.checkboxText}>No soy un robot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkboxItem} onPress={() => setAgreedTerms(!agreedTerms)}>
            <Text style={[styles.checkboxIcon, { borderColor: agreedTerms ? PURPLE_DARK : '#333' }]}>
                {agreedTerms ? '✓' : ''}
            </Text>
            <Text style={styles.checkboxText}>Aceptar términos y condiciones</Text>
          </TouchableOpacity>
        </View>

        {/* Botones */}
        <View style={styles.botones}>
          <TouchableOpacity style={styles.botonCancelar}>
            <Text style={styles.botonCancelarTexto}>Cancelar ❌</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonPagar}>
            <Text style={styles.botonPagarTexto}>Pagar →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Elisea | Pago con tarjeta</Text>
      </View>
    </ScrollView>
  );
};

const PURPLE_DARK = '#3b004f';
const LIGHT_BACKGROUND = '#f8f6fa';
const ACCENT_COLOR = '#9c59b8';
const CARD_BLUE = '#1D1D1D'; // Azul oscuro/negro para la tarjeta

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
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    width: 38,
    height: 38,
    textAlign: 'center',
    lineHeight: 34,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white', 
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 30,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    color: PURPLE_DARK,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  
  // === SECCIÓN DE TARJETA VISUAL Y RESUMEN ===
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resumenCard: {
    width: '45%',
    backgroundColor: '#fff3cd', // Fondo amarillo claro como la imagen
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-start',
    elevation: 2,
  },
  resumenCardText: {
    borderLeftWidth: 3,
    borderLeftColor: '#856404',
    paddingLeft: 10,
  },
  resumenTitulo: {
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginBottom: 5,
    fontSize: 13,
  },
  resumenTexto: {
    color: '#333',
    fontSize: 12,
    lineHeight: 18,
  },
  visualCard: {
    width: '50%',
    backgroundColor: CARD_BLUE, 
    borderRadius: 8,
    padding: 10,
    height: 120, // Altura fija para que coincida con la imagen
    justifyContent: 'space-between',
    elevation: 3,
  },
  cardName: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  cardNumber: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 5,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: '#ddd',
    fontSize: 8,
  },
  cardValue: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardPlaceholder: {
    color: '#ccc',
    fontSize: 8,
    textAlign: 'center',
  },
  
  // === FORMULARIO ===
  formSection: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    color: PURPLE_DARK,
    marginBottom: 5,
    fontWeight: '600',
    fontSize: 13,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 14,
  },
  fila: {
    flexDirection: 'row',
  },
  // === SUGERENCIA ===
  sugerencia: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  sugerenciaTitulo: {
    fontWeight: 'bold',
    color: '#856404',
  },
  sugerenciaTexto: {
    color: '#856404',
    marginTop: 5,
    fontSize: 13,
  },
  // === CHECKBOXES ===
  checkboxes: {
    marginVertical: 15,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 10,
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 14,
    color: PURPLE_DARK,
  },
  checkboxText: {
    color: '#333',
  },
  // === BOTONES ===
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  botonCancelar: {
    backgroundColor: '#dc3545', // Rojo para cancelar
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  botonCancelarTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  botonPagar: {
    backgroundColor: '#28a745', // Verde para pagar
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  botonPagarTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: PURPLE_DARK,
    fontSize: 12,
  },
});

export default PagoTarjeta;