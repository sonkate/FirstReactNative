import React, {useState} from 'react'
import { Text, View , Switch} from 'react-native'
import { Header } from "react-native-elements";
import styles from '../../elements/style';

const SettingScreen: React.FC =() =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    return(
        <View>
            <Header
            backgroundColor="rgb(253,201,0)"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "Setting",
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
                <Text style = {styles.title}>Light</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? 'rgb(253,201,0)' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style = {styles.switch}
                />
                <Text style = {styles.title}>Fan</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled2 ? 'rgb(253,201,0)' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                    style = {styles.switch}
                />

                <Text style = {styles.title}>Door</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled3 ? 'rgb(253,201,0)' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                    style = {styles.switch}
                />
            </View>            
        </View>
    )
}

export default SettingScreen