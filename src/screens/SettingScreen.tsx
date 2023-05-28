import React, { useState } from 'react'
import { Text, View, Switch } from 'react-native'
import { Header } from "react-native-elements";
import styles from '../../elements/style';


const AIO_KEY = 'aio_Mptp698oV7uAYedDlpA2p4wlew7n';
const AIO_USERNAME = 'HarryHaha';

const FEED_ID_FAN = 'button-fan';
const FEED_ID_LIGHT = 'button-light';
const FEED_ID_DOOR = 'door';

const url_button_fan = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_ID_FAN}/data`;
const url_button_light = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_ID_LIGHT}/data`;
const url_button_door = `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_ID_DOOR}/data`;


export function set_value(value: string, url: string): void {
    fetch(url, {
        method: 'POST',
        headers: {
            'X-AIO-Key': AIO_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

}
// Fetch temperature data

const SettingScreen: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        set_value(`${!isEnabled ? "1" : "0"}`, url_button_light)

    }
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => {
        setIsEnabled2(previousState => !previousState);
        set_value(`${!isEnabled2 ? "1" : "0"}`, url_button_fan)

    }
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => {
        setIsEnabled3(previousState => !previousState);
        set_value(`${!isEnabled3 ? "1" : "0"}`, url_button_door)

    }
    return (
        <View>
            <Header
                backgroundColor="rgb(253,201,0)"
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                    text: "Setting",
                    style: { color: "#fff", fontSize: 20, padding: 10 }
                }}
                centerContainerStyle={{}}
                // leftComponent={{ icon: "menu", color: "#fff" }}
                leftContainerStyle={{}}
                placement="center"
                // rightComponent={{ icon: "home", color: "#fff" }}
                rightContainerStyle={{}}
                statusBarProps={{}}
            />

            <View style={styles.container}>

                <Text style={styles.title}>Light</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? 'rgb(253,201,0)' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                />


                <Text style={styles.title}>Fan</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled2 ? 'rgb(253,201,0)' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                    style={styles.switch}
                />

                <Text style={styles.title}>Door</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled3 ? 'rgb(253,201,0)' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                    style={styles.switch}
                />
            </View>
        </View>
    )
}

export default SettingScreen