// screens/Perfil_User.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Image } from 'expo-image';

// Función para manejar el guardado de cambios
const guardarCambios = () => {
  Alert.alert("Éxito", "Cambios guardados correctamente 🎉");
};

// 🟢 Componente principal
const Perfil_User = () => {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>E</Text>
        <TextInput
          placeholder="Buscar en Elisea"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          style={styles.headerInput}
        />
        <Text style={{ color: 'white', fontSize: 20 }}>⋮</Text>
      </View>

      {/* MAIN */}
      <View style={styles.main}>
        {/* Botones */}
        <View style={styles.botones}>
          <TouchableOpacity style={styles.botonSecundario}>
            <Text style={styles.botonSecundarioTexto}>Regresar</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.botonSecundario}>
            <Text style={styles.botonSecundarioTexto}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Foto de Perfil */}
        <View style={styles.perfilFoto}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' }}
            style={styles.perfilFotoImagen}
            contentFit="cover"
          />
          <View style={styles.iconoCamara}>
            <Text style={{ color: 'white', fontSize: 14 }}>📷</Text>
          </View>
        </View>

        <Text style={styles.h1}>MI PERFIL</Text>

        {/* Campos */}
        <InputItem label="Nombre" placeholder="Nombre" />
        <InputItem label="Correo" placeholder="Correo" keyboardType="email-address" />
        <InputItem label="Contraseña" placeholder="**********" secureTextEntry />
        <InputItem label="Teléfono de contacto" placeholder="Teléfono de contacto" keyboardType="phone-pad" />
        <InputItem label="Edad" placeholder="Edad" keyboardType="phone-pad" />
        <InputItem label="Sexo" placeholder="Sexo" />
        <InputItem label="Nombre de Usuario" placeholder="Nombre de Usuario" />
        <InputItem label="Ubicación" placeholder="Ubicación" />
        <InputItem label="Sobre mí" placeholder="Sobre mí" />
        

        {/* Guardar */}
        <TouchableOpacity style={styles.guardar} onPress={guardarCambios}>
          <Text style={styles.guardarTexto}>Guardar cambios</Text>
        </TouchableOpacity>
        
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Elisea | Perfil proveedor</Text>
      </View>
    </ScrollView>
  );
};

// Componente auxiliar para inputs
const InputItem = ({ label, placeholder, ...props }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f6fa' },

  header: {
    backgroundColor: '#3b004f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerInput: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 25,
    backgroundColor: 'white',
    width: '60%',
    color: '#3b004f',
  },

  main: {
    maxWidth: 400,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
    width: '90%',
  },
  h1: {
    fontSize: 22,
    color: '#3b004f',
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  botonSecundario: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  botonSecundarioTexto: { color: '#3b004f', fontWeight: '600',  },

  perfilFoto: {
    position: 'relative',
    marginVertical: 15,
    width: 110,
    height: 110,
    borderRadius: 55,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  perfilFotoImagen: { width: '100%', height: '100%' },
  iconoCamara: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3b004f',
    borderRadius: 50,
    padding: 5,
  },

  inputContainer: { marginBottom: 10 },
  label: {
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 5,
    color: '#3b004f',
    marginLeft: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    color: '#3b004f',
    backgroundColor: 'white',
  },

  guardar: {
    backgroundColor: '#B991C6',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  guardarTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  footer: { padding: 15, alignItems: 'center' },
  footerText: { fontSize: 13, color: '#3b004f' },
});

export default Perfil_User;
