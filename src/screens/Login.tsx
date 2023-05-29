import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../elements/style';
;

import * as SQLite from 'expo-sqlite'

interface ILoginProps {
    navigation: any;
}
export const initDatabase = () => {
    const db = SQLite.openDatabase('smarthome.db');
  
    db.transaction(tx => {
      // Create the users table
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)'
      );
  
      // Insert some sample users
      tx.executeSql('INSERT INTO users (username, password) VALUES (?, ?)', [
        'user1',
        'password1',
      ]);
      tx.executeSql('INSERT INTO users (username, password) VALUES (?, ?)', [
        'user2',
        'password2',
      ]);
    });
    return db;
  };
const LoginScreen: React.FC<ILoginProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const db = SQLite.openDatabase('smarthome.db');

const handleLogin = async(username: string, password: string) => {
    const db= await initDatabase()

    db.transaction(tx => {
        tx.executeSql(
        'SELECT username FROM users WHERE username = ? AND password = ?',
        [username, password],
        (tx, { rows: { length, _array } }) => {
            if (length > 0) {
            // user found, navigate to the home screen
            navigation.navigate('Home');
            } else {
            // user not found, display an error message
            setMsg('Invalid username or password');
            console.log(msg)
            }
        },
        error => {
            console.log(error);
            return true;
      }
    );
  });
};

    return (
        <View style={styles.container_login}>
            <Text style={styles.logo}>Login</Text>
            <TouchableOpacity style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin(username, password)}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupText}>Don't have an account? Sign up now</Text>
            </TouchableOpacity>
            {msg ? <Text style={styles.errorMessage}>{msg}</Text> : null}
        </View>
    );
};



export default LoginScreen;