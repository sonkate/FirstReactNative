import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../elements/style';
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



    const handleRegister = (username: string, password: string, cf_password: string) => {
        // Handle login logic here
        if (password !== cf_password) {
            setMsg('Password did not match');
            return;
        }
        else {

        }

    };

    return (
        <View style={styles.container_login}>
            <Text style={styles.logo}>Register</Text>
            <Text style={styles.text_mid}>{msg ? msg : 'No thing'}</Text>

            <TextInput
                style={styles.inputView}
                placeholder="Username"
                placeholderTextColor="#003f5c"
                onChangeText={text => setUsername(text)}
                value={username}
            />

            <TextInput
                style={styles.inputView}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />

            <TextInput
                style={styles.inputView}
                placeholder="Confirm Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={text => setConfirmPassword(text)}
                value={confirm_password}
            />

            <TouchableOpacity style={styles.loginBtn} onPress={() => handleRegister(username, password, confirm_password)}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
};



export default RegisterScreen;