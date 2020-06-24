import React from 'react';
import { StyleSheet,Image, Text, View,TouchableOpacity } from 'react-native';
import {Audio} from "expo-av";

const listBackColor = {
  1:"#26ae60",
  2:"#E74292",
  3:"#01CBC6",
  4:"#BB2CD9",
  5:"#8B78E6",
  6:"#0A3D62",
  7:"#1287A5",
  8:"#EA7773",
  9:"#2B2B52",
  10:"#192A56"
}

const soundList = {
  1:require('./assets/one.wav'),
  2:require('./assets/two.wav'),
  3:require('./assets/three.wav'),
  4:require('./assets/four.wav'),
  5:require('./assets/five.wav'),
  6:require('./assets/six.wav'),
  7:require('./assets/seven.wav'),
  8:require('./assets/eight.wav'),
  9:require('./assets/nine.wav'),
  10:require('./assets/ten.wav'),
}




export default class App extends React.Component {

  playsound = async number => {
    const soundObject = new Audio.Sound();
try{
  let path = soundList[number];
  await soundObject.loadAsync(path);
  await soundObject
    .playAsync()
    .then(async playbackStatus =>{
      setTimeout(() => {
        soundObject.unloadAsync();
      }, playbackStatus.playableDurationMillis);
    }
    ).catch(err => {
      console.log(err)
    }

    )
}catch(error){
  console.log(error)
}
  }


  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')}></Image>
        <Text>Juju's 1-10</Text>
        <View style={styles.gridContainer}>
            
            <View style={styles.rowContainer}>
              <TouchableOpacity style={[{backgroundColor:listBackColor[1]},styles.item]} onPress={() => {this.playsound(1)}}>
                <Text style={styles.itemText}>One</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:listBackColor[2]},styles.item]} onPress={() => {this.playsound(2)}}>
                <Text style={styles.itemText}>Two</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity style={[{backgroundColor:listBackColor[3]},styles.item]} onPress={() => {this.playsound(3)}}>
                <Text style={styles.itemText}>Three</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:listBackColor[4]},styles.item]} onPress={() => {this.playsound(4)}}>
                <Text style={styles.itemText}>Four</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity style={[{backgroundColor:listBackColor[5]},styles.item]} onPress={() => {this.playsound(5)}}>
                <Text style={styles.itemText}>Five</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:listBackColor[6]},styles.item]} onPress={() => {this.playsound(6)}}>
                <Text style={styles.itemText}>Six</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity style={[{backgroundColor:listBackColor[7]},styles.item]} onPress={() => {this.playsound(7)}}>
                <Text style={styles.itemText}>Seven</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:listBackColor[8]},styles.item]} onPress={() => {this.playsound(8)}}>
                <Text style={styles.itemText}>Eight</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity style={[{backgroundColor:listBackColor[9]},styles.item]} onPress={() => {this.playsound(9)}}>
                <Text style={styles.itemText}>Nine</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[{backgroundColor:listBackColor[10]},styles.item]} onPress={() => {this.playsound(10)}}>
                <Text style={styles.itemText}>Ten</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B8788',
    
  },
  gridContainer:{
    flex:1,
    margin:5
  },
  rowContainer:{
    flexDirection:"row"
  },
  item:{
    flex:1,
    height:110,
    alignItems:"center",
    justifyContent:"center",
    margin:8,
    borderRadius:20
  },
  itemText:{
    color:"white",
    fontSize:30
  },
  logo:{
    alignSelf:'center',
    marginTop:20
  }
});
