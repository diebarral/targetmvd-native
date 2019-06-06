import { StyleSheet } from 'react-native';
import { black } from 'styles/common';

const styles = StyleSheet.create({
  input: {
    borderColor: black,
    borderWidth: .5,
    fontSize: 14,
    height: 37,
    letterSpacing: 2.1,
    marginBottom: 10,
    textAlign: 'center'
  },
  label: {
    fontSize: 11,
    letterSpacing: 1.65,
    textAlign: 'center'
  },
  button: {
    alignSelf: 'center',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default styles;
