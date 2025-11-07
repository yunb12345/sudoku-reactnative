import { StyleSheet, View } from 'react-native';
import Cell from './Cell';

export default function Board({ board, selected, onSelect, givenMask }) {
  return (
    <View style={styles.container}>
      {board.map((row, r) => (
        <View
          key={r}
          style={[
            styles.row,
            (r + 1) % 3 === 0 && r !== 8 ? styles.thickBottom : null,
          ]}
        >
          {row.map((value, c) => (
            <View
              key={c}
              style={[
                (c + 1) % 3 === 0 && c !== 8 ? styles.thickRight : null,
              ]}
            >
              <Cell
                value={value}
                isSelected={selected && selected[0] === r && selected[1] === c}
                isGiven={givenMask[r][c]}
                onPress={() => onSelect(r, c)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  thickBottom: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  thickRight: {
    borderRightWidth: 3,
    borderRightColor: '#000',
  },
});
