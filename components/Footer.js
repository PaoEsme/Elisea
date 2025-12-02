import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function NavigationMenu() {
  const [active, setActive] = useState('home');

  const icons = [
    { name: 'home-outline', key: 'home' },
    { name: 'chatbubble-ellipses-outline', key: 'chat' },
    { name: 'search-outline', key: 'search' },
    { name: 'notifications-outline', key: 'notifications' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        {icons.map((icon) => {
          const isActive = active === icon.key;
          return (
            <TouchableOpacity
              key={icon.key}
              onPress={() => setActive(icon.key)}
              style={styles.iconContainer}
            >
              <View style={[styles.iconWrapper, isActive && styles.activeCircle]}>
                <Ionicons
                  name={icon.name}
                  size={26}
                  color={isActive ? '#210535' : '#fff'}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#210535', // morado oscuro
    width: '100%',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#fff', // morado claro
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});


