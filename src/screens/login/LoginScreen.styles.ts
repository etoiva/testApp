import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 3,
      justifyContent: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
    },
    btnView: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: 20,
      gap: 10,
    },
    err: {
      color: 'red',
    },
  });
};
