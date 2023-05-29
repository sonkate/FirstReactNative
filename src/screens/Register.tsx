import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../elements/style';
import { initDatabase } from '../screens/Login'
import * as SQLite from 'expo-sqlite'
interface ILoginProps {
    navigation: any;
}

import * as Crypto from 'expo-crypto';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native-elements';
const RegisterScreen: React.FC<ILoginProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const { register, handleSubmit } = useForm();

    const [msg, setMsg] = useState('');



    const handleRegister = async(username: string, password: string, cf_password: string) => {
        // Handle login logic here
        const db = await initDatabase();
   

        if (password !== cf_password) {
            setMsg('Password did not match');
            return;
        }
        else {
            db.transaction(
                tx => {
                  tx.executeSql(
                    'INSERT INTO users (username, password) VALUES (?, ?)',
                    [username, cf_password],
                    (_tx, result) => {
                      setMsg('Registered successfully');
                      navigation.navigate('Login');
                    },
                    (_tx, error) => {
                      setMsg('Registration failed');
                      console.log('Error:', error);
                      return true;
                    }
                  );
                },
                error => {
                    console.log('Transaction error:', error);
                  });
                }
            

    };

    return (
        <View style={styles.container_login}>
            <Text style={styles.logo}>Register</Text>
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
            <TouchableOpacity style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirm_password}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => handleRegister(username, password, confirm_password)}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
};



export default RegisterScreen;