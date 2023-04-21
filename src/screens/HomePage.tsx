import * as React from 'react'
import { View, Text } from 'react-native'
import { Button, Header } from "react-native-elements"

import styled from 'styled-components';

const Page = styled.View`
    padding: 40px 30px 0 30px; 
`
const HomePage: React.FC =() =>{
    return(
        <View>
            <Header
            backgroundColor="rgb(253,201,0)"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "Smart Home",
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

            <Page>
                <Button title="123123"/>
            </Page>

        </View>
    )
}

export default HomePage