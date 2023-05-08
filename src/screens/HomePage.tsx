import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { Button, Header } from "react-native-elements"
import styles from '../../elements/style'
const HomePage: React.FC =() =>{
    return(
        <View>
            <Header
                backgroundColor="rgb(253,201,0)"
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                    text: "Smart Home",
                    style: {color: "#fff" ,fontSize: 20, paddingBottom:5}
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
                <Text style = {styles.title}>Temperature</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style = {styles.text_mid}>25</Text>
                </TouchableOpacity>
                <Text style = {styles.title}>Brightness</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style = {styles.text_mid}>50</Text>
                </TouchableOpacity>
                <Text style = {styles.title}>Humidity</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style = {styles.text_mid}>80%</Text>
                </TouchableOpacity>
            </View>

            
            

        </View>
    )
}



export default HomePage