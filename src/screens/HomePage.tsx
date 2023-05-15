import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { Button, Header } from "react-native-elements"
import styles from '../../elements/style'
import debounce from 'lodash/debounce';
import * as SQLite from 'expo-sqlite'
import { times } from 'lodash';
import { Line } from 'react-chartjs-2';
import { Demo } from '../../elements/lineChart';

const AIO_KEY = 'aio_Mptp698oV7uAYedDlpA2p4wlew7n';
const AIO_USERNAME = 'HarryHaha';

// define DataItem
interface NameItem {
  id: any;
  temperature: number;
  lightness: number;
  humidity: number;
}





const HomePage: React.FC = () => {
  var arr_tem_light_humid = [0, 0, 0];
  const [db, setDb] = useState(SQLite.openDatabase('smarthome.db'));
  const [datas, setDatas] = useState<NameItem[]>([]);
  const [temperature, setTemperature] = useState(null);
  const [light, setLight] = useState(null);
  const [humidity, setHumidity] = useState(null);



  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM smarthome',
      [],

      (txObj, resultSet) => {
        setDatas(resultSet.rows._array);
        console.log(resultSet.rows._array);
      },
    );
  });

  useEffect(() => {
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     `DROP TABLE IF EXISTS smarthome;`,
    //     [],
    //     (txObj, resultSet) => {
    //       console.log('Table "smarthome" dropped successfully');
    //     }
    //   );
    // });
    // Create a new table
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS smarthome (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              temperature FLOAT,
              lightness FLOAT,
              humidity FLOAT,
              timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            );`
      );
    });
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM smarthome',
        [],

        (txObj, resultSet) => {
          setDatas(resultSet.rows._array);
          console.log(resultSet.rows._array);
        },
      );
    });

    const intervalId = setInterval(handleFetchAndAddData, 5000);

    return () => clearInterval(intervalId);
  }, [db]);

  // add data to the database
  const addData = (temperature: number, lightness: number, humidity: number) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM smarthome',
        [],

        (txObj, resultSet) => {
          setDatas(resultSet.rows._array);
        },
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO smarthome (temperature, lightness, humidity) VALUES (?, ?, ?)',
        [temperature, lightness, humidity],
        (_, resultSet) => {
          let existingDatas = [...datas];
          existingDatas.push({ id: resultSet.insertId, temperature: temperature, lightness: lightness, humidity: humidity });
          setDatas(existingDatas);
        },

      );
    });
  };

  // show data for check
  const showDatas = () => {
    return datas.map((data, index) => {
      return (
        <View key={index} >
          <Text>{data.temperature}</Text>
          <Text>{data.lightness}</Text>
          <Text>{data.humidity}</Text>
          <Text>{datas.length}</Text>
        </View>
      );
    });
  };

  const debouncedFetchAndAddData = debounce(async () => {
    // Fetch data
    const responseTemp = await fetch(
      `https://io.adafruit.com/api/v2/HarryHaha/feeds/temp-sensor/data/last`,
      {
        headers: {
          'X-AIO-Key': AIO_KEY,
        },
      }
    );
    const responseLight = await fetch(
      `https://io.adafruit.com/api/v2/HarryHaha/feeds/light-sensor/data/last`,
      {
        headers: {
          'X-AIO-Key': AIO_KEY,
        },
      }
    );
    const responseHumid = await fetch(
      `https://io.adafruit.com/api/v2/HarryHaha/feeds/humid-sensor/data/last`,
      {
        headers: {
          'X-AIO-Key': AIO_KEY,
        },
      }
    );
    let dataTemp = await responseTemp.json();
    let dataLight = await responseLight.json();
    let dataHumid = await responseHumid.json();
    arr_tem_light_humid = [dataTemp.value, dataLight.value, dataHumid.value];
    setTemperature(dataTemp.value);
    setLight(dataLight.value);
    setHumidity(dataHumid.value);
    // Call addData
    addData(arr_tem_light_humid[0], arr_tem_light_humid[1], arr_tem_light_humid[2]);
    addData(arr_tem_light_humid[0], arr_tem_light_humid[1], 0);
  }, 100);

  const handleFetchAndAddData = async () => {
    await debouncedFetchAndAddData();
  };


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Expenses by Month',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(153, 102, 255)'
      ],
      borderColor: [
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }]
  });



  return (
    <View>
      <Header
        backgroundColor="rgb(253,201,0)"
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: "Smart Home",
          style: { color: "#fff", fontSize: 20, paddingBottom: 5 }
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
        <Text style={styles.title}>Temperature</Text>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text_mid}>{temperature != null ? temperature : "-"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Brightness</Text>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text_mid}>{light != null ? light : "-"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Humidity</Text>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.text_mid}>{humidity != null ? humidity : "-"}%</Text>
        </TouchableOpacity>

        {/* chart here */}
        <Demo />
        {/* {showDatas()} */}
      </View>

    </View>
  )
}



export default HomePage