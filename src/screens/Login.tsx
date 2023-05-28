import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../elements/style';
import * as SQLite from 'expo-sqlite'

interface ILoginProps {
    navigation: any;
}



const LoginScreen: React.FC<ILoginProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const handleLogin = (username: string, password: string) => {

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
        </View>
    );
};



export default LoginScreen;