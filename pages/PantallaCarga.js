import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

export default function PantallaCarga() {
  
  // --- Animaciones de los círculos pulsantes ---
  const scale1 = useRef(new Animated.Value(0)).current;
  const opacity1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const createLoop = (scale, opacity) => {
      return Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(scale, {
              toValue: 1,
              duration: 2000,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration: 2000,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(scale, { toValue: 0, duration: 0, useNativeDriver: true }),
            Animated.timing(opacity, { toValue: 1, duration: 0, useNativeDriver: true }),
          ]),
        ])
      );
    };

    const loop1 = createLoop(scale1, opacity1);
    const loop2 = createLoop(scale2, opacity2);
    loop1.start();
    const timer = setTimeout(() => loop2.start(), 1000);

    return () => {
      loop1.stop();
      loop2.stop();
      clearTimeout(timer);
    };
    
  }, [scale1, opacity1, scale2, opacity2]);

  // Ya no hay un retorno 'null' condicional. La pantalla carga inmediatamente.
  
  return (
    <View style={styles.container}>
      
      {/* Logo con loader (solo los círculos pulsantes) */}
      <View style={styles.logoWrapper}>
        <Animated.View
          style={[
            styles.pulseCircle,
            { transform: [{ scale: scale1 }], opacity: opacity1 },
          ]}
        />
        <Animated.View
          style={[
            styles.pulseCircle,
            { transform: [{ scale: scale2 }], opacity: opacity2 },
          ]}
        />
      </View>

      {/* Línea decorativa y estrella central */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.star}>✦</Text>
        <View style={styles.line} />
      </View>

      {/* Texto principal */}
      <Text style={styles.title}>ELISEA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#210535',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoWrapper: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  // Círculos pulsantes
  pulseCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#F5D5E0',
    position: 'absolute',
  },

  // Línea decorativa
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '80%',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#F5D5E0',
    opacity: 0.7,
  },
  star: {
    fontSize: 20,
    marginHorizontal: 15,
    color: '#F5D5E0',
  },

  // Texto principal
  title: {
    color: '#F5D5E0',
    fontSize: 52,
    letterSpacing: 5,
    // SE HA ELIMINADO LA PROPIEDAD fontFamily PERSONALIZADA
    // Ahora usa la fuente por defecto del sistema (ej. San Francisco, Roboto)
    fontWeight: '400',
    marginTop: -20, 
  },
});