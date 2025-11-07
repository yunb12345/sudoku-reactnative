import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Cell({ value, onPress, isSelected, isGiven }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isGiven}
      style={[
        styles.cell,
        isSelected && styles.selected,
        isGiven && styles.given
      ]}
    >
      <Text style={styles.text}>{value !== 0 ? value : ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#b3e5fc',
  },
  given: {
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});