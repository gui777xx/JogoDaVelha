import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Figura from './components/figura';
import { useState } from 'react';

let array = new Array(9).fill(0);


export default function App() {
  const [Values, setValues] = useState({
    isCross: true,
    winMessage: ""
  }) 

  return (
    <View style={styles.container}>
      <Text style={style.container}>Jogo da Veia</Text>
      <View style={style.row}>
        <View style={style.box}>
          <Figura />

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

text: {
  fontSize: 40,
  color: '#000', 
  fontWeight: 'bold',
  marginBottom: 20,
},
row: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box: {
  borderWicht: 2,
  borderColor: '#000',
  padding: 10, 
}
});
