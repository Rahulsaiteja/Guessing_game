import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import generateRandom from '../utils/generateRandom';

export default function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, userNumber));
  const [rounds, setRounds] = useState(0);

  // Track current min and max bounds to avoid invalid guesses
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds + 1);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess - 1;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds((prev) => prev + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponents Guess</Text>
      <Text style={styles.guess}>{currentGuess}</Text>
      <View style={styles.buttonRow}>
        <Button title="LOWER" onPress={() => nextGuessHandler('lower')} />
        <Button title="HIGHER" onPress={() => nextGuessHandler('higher')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  guess: { fontSize: 40, fontWeight: 'bold', marginBottom: 20 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', width: '80%' },
});
