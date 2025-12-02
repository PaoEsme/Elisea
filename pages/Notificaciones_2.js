import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotificacionDetalle(props) {
  const navigation = useNavigation();

  const route = props.route || { params: {} };
  
  // 1. SOLO RECUPERAMOS LA FECHA Y EL PROVEEDOR DE LOS PARÁMETROS
  // Ya no tomamos el 'titulo' de aquí para que no lo sobrescriba.
  const { fecha, proveedor } = route.params || {
    fecha: "4:12 p.m.",
    proveedor: "[Nombre del proveedor]"
  };

  // 2. DEFINIMOS EL TÍTULO DEL ENCABEZADO COMO FIJO
  const headerTitleText = "¡Nuevas actualizaciones en mis servicios! 🧐";

  // Textos fijos del cuerpo
  const textoIntro = "Nuestra organización quiere presentar el nuevo salon que se encuentra en XXXXXX, en el estado de XXXXX.";
  const mensaje = "Cuenta con alberca, karaoke, futbolito y hasta barra libre.\nSi estás interesado en contratar no dudes en mandarnos un mensaje, algun correo o llamarnos ¡Te atenderemos lo antes posible!\n\nAhora mismo contamos con una promoción de inauguración, ¡aprovechala!\n\nEsta promoción estará disponible por dos semanas.";

  return (
    <View style={styles.container}>
      {/* Header Superior */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={30} color="#333" />
        </TouchableOpacity>
        
        {/* 3. USAMOS LA VARIABLE FIJA PARA EL TÍTULO */}
        <Text style={styles.headerTitle}>{headerTitleText}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* --- PERFIL --- */}
        <View style={styles.profileRow}>
            <View style={styles.avatar} />
            <View style={styles.textContainer}>
                {/* Aquí sí usamos el nombre del proveedor dinámico */}
                <Text style={styles.providerName}>{proveedor}</Text>
                <Text style={styles.date}>{fecha}</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
                <Ionicons name="heart-outline" size={28} color="#7A2E7A" />
            </TouchableOpacity>
        </View>

        {/* Intro */}
        <Text style={styles.introText}>{textoIntro}</Text>

        {/* Mensaje Principal */}
        <Text style={styles.message}>{mensaje}</Text>

        {/* Imágenes */}
        <View style={styles.imagesContainer}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          Cualquier daño en el establecimiento se sumará al precio final del servicio.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7A2E7A",
    flex: 1,
    // Aseguramos que el texto largo se ajuste bien si es necesario
    flexWrap: 'wrap', 
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  profileRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15,
    marginTop: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    marginRight: 15, 
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'center',
  },
  providerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A2E7A",
    textAlign: 'left',
  },
  date: {
    fontSize: 14,
    color: "#888", 
    marginTop: 2,
    textAlign: 'left',
  },
  heartButton: {
    paddingLeft: 10, 
  },
  introText: {
    fontSize: 16,
    color: "#7A2E7A",
    lineHeight: 24,
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    color: "#7A2E7A",
    lineHeight: 24,
    marginBottom: 25,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
  },
  footerText: {
    fontSize: 12,
    color: "#7A2E7A",
    textAlign: 'center',
    fontWeight: 'bold',
  },
});