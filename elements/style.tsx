import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 40,
        // marginRight:40,
    },
    item: {
      backgroundColor: '#f9c2ff',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
        fontSize: 22,
        color: '#035397',
    },
    text: {
        fontSize: 18,
        color: '#035397',
      },
    text_mid:{
      fontSize: 18,
      textAlign:'center',
    },
    switch: {
      transform: [{scaleX: 1.4}, {scaleY: 1.4}],
      alignItems: 'flex-end',
      marginRight:50,
    },
    buttonStyle: {
      backgroundColor: '#DCDCDC',
      marginVertical: 10,
      padding: 10,
      fontSize: 18,
      borderRadius: 5,
    },
  });
export default styles;