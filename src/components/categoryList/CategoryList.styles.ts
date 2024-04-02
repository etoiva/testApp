import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    main: {
      width: 100,
      height: 100,
      borderColor: 'grey',
      borderWidth: 0.5,
      gap: 4,
      marginBottom: 10,
      marginLeft: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    header: {
      flex: 1,
      margin: 8,
      backgroundColor: 'green',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    headerText: {
      color: 'white',
      fontSize: 15,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      width: '90%',
      height: '70%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      height: 40,
      width: '60%',
      margin: 12,
      borderWidth: 0.5,
      padding: 10,
      borderRadius: 8,
    },
    btn: {
      width: '60%',
    },
  });
};
