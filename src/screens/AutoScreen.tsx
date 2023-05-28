import React, { useState } from 'react'
import { Text, View, Alert, TouchableOpacity } from 'react-native'
import { Button, Header } from "react-native-elements";
import styles from '../../elements/style';
import { set_value } from './SettingScreen';
import { transformAsync } from '@babel/core';


const AIO_KEY = 'aio_Mptp698oV7uAYedDlpA2p4wlew7n';
const AIO_USERNAME = 'HarryHaha';

const FEED_ID_1 = 'auto1';
const FEED_ID_2 = 'auto2';
const FEED_ID_3 = 'auto3';

const url_auto_1 = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_ID_1}/data`;
const url_auto_2 = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_ID_2}/data`;
const url_auto_3 = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_ID_3}/data`;


let newBackgroundColor1 = '#DCDCDC';
let newBackgroundColor2 = '#DCDCDC';
let newBackgroundColor3 = '#DCDCDC';
const AutoScreen: React.FC = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => {
        set_value(`${!isEnabled1 ? "1" : "0"}`, url_auto_1)
        if (isEnabled1) {
            newBackgroundColor1 = '#DCDCDC';
            setIsEnabled1(false);
        } else {
            newBackgroundColor1 = '#00DD00';
            setIsEnabled1(true);
        }
    }

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => {
        set_value(`${!isEnabled2 ? "1" : "0"}`, url_auto_2)
        if (isEnabled2) {
            newBackgroundColor2 = '#DCDCDC';
            setIsEnabled2(false);
        } else {
            newBackgroundColor2 = '#00DD00';
            setIsEnabled2(true);
        }
    }

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => {
        set_value(`${!isEnabled3 ? "1" : "0"}`, url_auto_3)
        if (isEnabled3) {
            newBackgroundColor3 = '#DCDCDC';
            setIsEnabled3(false);
        } else {
            newBackgroundColor3 = '#00DD00';
            setIsEnabled3(true);
        }
    }

    return (
        <View>
            <Header
                backgroundColor="rgb(253,201,0)"
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                    text: "Auto",
                    style: { color: "#fff", fontSize: 20, padding: 10 }
                }}
                centerContainerStyle={{}}
                // leftComponent={{ icon: "menu", color: "#fff" }}
                leftContainerStyle={{}}
                placement="center"
                // rightComponent={{ icon: "home", color: "#fff" }}
                rightContainerStyle={{}}
                statusBarProps={{ hidden: true }}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Recommends</Text>

                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: newBackgroundColor1 }]} onPress={() => toggleSwitch1()}>
                    <Text style={styles.text}>Turn on the light when it's dark</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: newBackgroundColor2 }]} onPress={() => toggleSwitch2()}>
                    <Text style={styles.text}>Turn on the fan when the temperature is over 20 degree</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: newBackgroundColor3 }]} onPress={() => toggleSwitch3()}>
                    <Text style={styles.text}>Turn on the light when there are peole in the room</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AutoScreen