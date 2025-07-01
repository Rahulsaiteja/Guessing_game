import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function StartGameScreen({ onStartGame }) {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert('Invalid number!', 'Please enter a number between 1 and 100.', [
        { text: 'Okay', style: 'destructive' },
      ]);
      return;
    }
    onStartGame(chosenNumber);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={3}
        onChangeText={numberInputHandler}
        value={enteredValue}
      />
      <Button title="Start" onPress={confirmInputHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    width: 50,
    textAlign: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 18,
  },
});
