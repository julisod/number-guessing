import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  
  const [header, setHeader] = useState("Guess a number between 1-100");
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(0);
  const [guesses, setGuesses] = useState(1);
  
  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const correct = () => {
    Alert.alert("You guessed the number in " + guesses + " guesses");
    setGuesses(1);
    setNumber(Math.floor(Math.random() * 100) + 1);
    setHeader("Guess a number between 1-100");
  }

  const guess = () => {
    console.log(number);
    if (parseInt(input) == number) {
      correct();
    } else if (parseInt(input) > number) {
      setHeader("Your guess is too high");
      setGuesses(guesses + 1);
    } else if (parseInt(input) < number) {
      setHeader("Your guess is too low");
      setGuesses(guesses + 1);
    }
    setInput("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 20 }} >
        {header}
      </Text>
      <TextInput
          style={{width:100, borderColor: 'gray', borderWidth:1, margin:50}}
          keyboardType='numeric'
          onChangeText={num => setInput(num)}
          value={input}
        />
      <Button onPress={guess} title="Make a guess" />
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
});
