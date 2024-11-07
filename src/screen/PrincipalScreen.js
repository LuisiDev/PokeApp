import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function PrincipalScreen({ route }) {
  const { img, desc } = route.params || {}; // Desestructurar con valores predeterminados

  return (
    <View style={styles.container}>
      {img ? (
        <Image source={{ uri: img }} style={styles.imagen} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text>{desc || 'No description available'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },
});