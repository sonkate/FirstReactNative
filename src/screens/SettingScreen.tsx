import * as React from 'react'
import { Text, View } from 'react-native'
import { Header } from "react-native-elements";

const SettingScreen: React.FC =() =>{
    return(
        <View>
            <View>
            <Header
            backgroundColor="rgb(253,201,0)"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "Setting",
                style: {color: "#fff" }
            }}
            centerContainerStyle={{}}
            // leftComponent={{ icon: "menu", color: "#fff" }}
            leftContainerStyle={{}}
            placement="center"
            // rightComponent={{ icon: "home", color: "#fff" }}
            rightContainerStyle={{}}
            statusBarProps={{}}
            />
        </View>
        </View>
    )
}

export default SettingScreen