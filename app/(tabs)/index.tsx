// app/index.tsx
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Perfil_User from '@/screens/Metodo_Pago'; // ✅ Importar interfacez

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3b004f" />
      <Perfil_User /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6fa',
  },
});
