import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setGuessRounds(rounds);
  };

  const restartGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds === 0) {
    content = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={restartGameHandler}
      />
    );
  }

  return <SafeAreaView style={styles.screen}>{content}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
