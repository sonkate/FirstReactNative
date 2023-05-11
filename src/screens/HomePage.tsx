import React, {useEffect,useState} from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { Button, Header } from "react-native-elements"
import styles from '../../elements/style'
import debounce from 'lodash/debounce';

const AIO_KEY = '';
const AIO_USERNAME = 'HarryHaha';

const HomePage: React.FC =() =>{
    const [temperature, setTemperature] = useState(null);
    const [light, setLight] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const debouncedFetch = debounce(() => {
        // Fetch temperature data
        fetch(`https://io.adafruit.com/api/v2/HarryHaha/feeds/temp-sensor/data/last`,
          {
            headers: {
              'X-AIO-Key': AIO_KEY
            }
          })
          .then(response => response.json())
          .then(data => setTemperature(data.value))
          .catch(error => console.error(error));
      
        // Fetch light data
        fetch(`https://io.adafruit.com/api/v2/HarryHaha/feeds/light-sensor/data/last`,
          {
            headers: {
              'X-AIO-Key': AIO_KEY
            }
          })
          .then(response => response.json())
          .then(data => setLight(data.value))
          .catch(error => console.error(error));
      
        // Fetch humidity data
        fetch(`https://io.adafruit.com/api/v2/HarryHaha/feeds/humid-sensor/data/last`,
          {
            headers: {
              'X-AIO-Key': AIO_KEY
            }
          })
          .then(response => response.json())
          .then(data => setHumidity(data.value))
          .catch(error => console.error(error));
      }, 100);
    

    useEffect(() => {
        debouncedFetch();
      
        const intervalId = setInterval(debouncedFetch, 5000);
      
        return () => clearInterval(intervalId);
      }, []);
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
                    <Text style={styles.text_mid}>{temperature != null ? temperature : "-"}</Text>
                </TouchableOpacity>
                <Text style = {styles.title}>Brightness</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style = {styles.text_mid}>{light != null ? light : "-"}</Text>
                </TouchableOpacity>
                <Text style = {styles.title}>Humidity</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style = {styles.text_mid}>{humidity != null ? humidity : "-"}%</Text>
                </TouchableOpacity>
            </View>

            
            

        </View>
    )
}



export default HomePage