import { StyleSheet, View } from 'react-native';
import Cell from './Cell';

export default function Board({ board, selected, onSelect, givenMask }) {
  return (
    <View style={styles.container}>
      {board.map((row, r) => (
        <View key={r} style={styles.row}>
          {row.map((value, c) => (
            <Cell
              key={c}
              value={value}
              isSelected={selected && selected[0] === r && selected[1] === c}
              isGiven={givenMask[r][c]}
              onPress={() => onSelect(r, c)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
});
