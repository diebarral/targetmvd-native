import { StyleSheet } from 'react-native';
import { black, background } from 'styles/common';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: background,
    flex: 1,
    width: '100%'
  },
  title: {
    fontSize: 20,
    letterSpacing: 3,
    margin: '20%',
    textAlign: 'center',
    top: 25
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    overflow: 'visible'
  },
  forgotPassword: {
    fontSize: 10.5,
    textAlign: 'center',
    width: '60%'
  },
  facebook: {
    fontSize: 12,
    letterSpacing: 2.4,
    marginTop: 32
  },
  dividerLine: {
    borderBottomColor: black,
    borderBottomWidth: 1,
    marginBottom: 15,
    marginTop: 60,
    width: 120
  },
  signUp: {
    fontSize: 11,
    letterSpacing: 1.65
  }
});

export default styles;
