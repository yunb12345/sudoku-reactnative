// App.js
import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import Board from './components/Board';
import { generatePuzzle } from './utils/generator';

export default function App() {
  const [board, setBoard] = useState([]);
  const [givenMask, setGivenMask] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    const puzzle = generatePuzzle();
    setBoard(puzzle);
    setGivenMask(puzzle.map(row => row.map(v => v !== 0)));
    setSelected(null);
  };

  const handleNumberPress = (num) => {
    if (!selected) return;
    const [r, c] = selected;
    if (givenMask[r][c]) return;
    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = num;
    setBoard(newBoard);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Board
        board={board}
        selected={selected}
        onSelect={setSelected}
        givenMask={givenMask}
      />
      <View style={styles.numberPad}>
        {[1,2,3,4,5,6,7,8,9].map(n => (
          <Button key={n} title={String(n)} onPress={() => handleNumberPress(n)} />
        ))}
      </View>
      <Button title="Nuevo juego" onPress={newGame} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
});
