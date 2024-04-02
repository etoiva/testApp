import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    wrapper: {
      height: 200,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 100,
      alignSelf: 'center',
      marginTop: 50,
      borderColor: 'green',
      borderWidth: 4,
    },
    categoryView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 18,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
    },
    seeWrapper: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderColor: 'grey',
      borderWidth: 0.5,
      borderRadius: 8,
    },
  });
};
