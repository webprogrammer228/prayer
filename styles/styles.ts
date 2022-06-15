import {StatusBar, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  form: {
    padding: 10,
    textAlign: 'center',
  },
  formHeader: {
    textAlign: 'center',
    fontSize: 24,
    margin: 12,
  },
  formSubHeader: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
  warning: {
    marginLeft: 10,
    marginBottom: 10,
    color: 'red',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  todo: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
