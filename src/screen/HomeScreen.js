import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function HomeScreen({navigation}) {
  const [imagenPokemon, setImagenPokemon] = useState(null);
  const [descPokemon, setDescPokemon] = useState(null);

  const sendPokemonData = (img,desc) => {
    console.log(img);
    console.log(desc);
    navigation.navigate("Pokemon", {img,desc})
  }

  useEffect(()=>{
    if (imagenPokemon && descPokemon) {
      sendPokemonData(imagenPokemon,descPokemon);      
    }
  },[imagenPokemon,descPokemon])

  return (
    <View style={styles.container}>
      <Text>Nombre del Pokemon</Text>
      <TextInput id='buscarPokemon' style={styles.buscador}></TextInput>
      <Pressable style={styles.boton} onPress={async()=>{
            const pokemondata = await getPokemon("charizard");
            setImagenPokemon(pokemondata[0]);
            setDescPokemon(pokemondata[1]);
      }}>
        <Text style={styles.texto}>Buscar</Text>
        </Pressable>
    </View>
  )
}

export async function getPokemon(pokemon) {
  const detalles = [];
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
        const result = await response.json();

        try {
          var resultImagenes = await getPokemonDetails(result.forms[0].url);
          const resultDetails = await getPokemonDetails(result.species.url);

          console.log("Este es el bueno:" + resultImagenes);

          detalles.push(resultImagenes.sprites.front_default,resultDetails.flavor_text_entries[26].flavor_text)
        } catch (errorDetails) {
          console.log(errorDetails);
        }
    }catch (error){
        throw error;
    }
    return detalles;
}

export async function getPokemonDetails(url) {
  try{
      const response = await fetch(url);
      const result = await response.json();
      return result;
  }catch (error){
      throw error;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor: '#ff0000',
  },
  texto:{
    color: '#fff',
  },
  buscador:{
    border: '2px solid',
    borderBlockColor: '#000',
    borderCurve:'continuous',
  },
});