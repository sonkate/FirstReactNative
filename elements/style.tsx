import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  container_login: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#035397',
  },
  text_mid: {
    fontSize: 18,
    textAlign: 'center',
  },
  switch: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
    alignItems: 'flex-end',
    marginRight: 50,
  },
  buttonStyle: {
    backgroundColor: '#DCDCDC',
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#035397',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#DCDCDC',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 150,
    padding: 15,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#035397',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signupText: {
    color: '#003f5c',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },

});
export default styles;