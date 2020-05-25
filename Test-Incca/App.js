import React, { Component } from "react";
import { StatusBar, View, } from "react-native";
import Routes from "./src/routes";
import { FooterLast } from "./src/components/index";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={"#FF8C00"} barStyle="light-content" />
        <Routes />
      </View>
    );
    
  }
  
}

