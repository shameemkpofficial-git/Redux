import { StatusBar } from "expo-status-bar";
import React,{Component} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class App extends Component{
  state = {count:10};

  decreamentcount(){
    let {count} = this.state;
    count --;
    this.setState({count})
  }

  increamentcount(){
    let {count} = this.state;
    count ++;
    this.setState({count})
  }
  render(){
    const {count} = this.state;
    return(
      <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Text>{count}</Text>
        <Button
        onPress={()=>this.increamentcount()}
        title='increament'></Button>

        <Button title='Decreament'
        onPress={()=>this.decreamentcount()}></Button>
        <StatusBar style='auto'></StatusBar>
      </View>
    )
  }
}


