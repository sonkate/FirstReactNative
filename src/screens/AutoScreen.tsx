import * as React from 'react'
import { Text, View, Alert, TouchableOpacity } from 'react-native'
import { Button, Header } from "react-native-elements";
import styles from '../../elements/style';

const AutoScreen: React.FC =() =>{
    return(
        <View>
            <Header
            backgroundColor="rgb(253,201,0)"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "Auto",
                style: {color: "#fff",fontSize: 20,paddingBottom:5 }
            }}
            centerContainerStyle={{}}
            // leftComponent={{ icon: "menu", color: "#fff" }}
            leftContainerStyle={{}}
            placement="center"
            // rightComponent={{ icon: "home", color: "#fff" }}
            rightContainerStyle={{}}
            statusBarProps={{}}
            />
            <View style = {styles.container}>
                <Text style={styles.title}>Recommends</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('Button pressed!')}>
                    <Text style={styles.text}>Click me</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('Button pressed!')}>
                    <Text style={styles.text}>Click me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('Button pressed!')}>
                    <Text style={styles.text}>Click me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AutoScreen