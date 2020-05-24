import React from "./node_modules/react";
import { StyleSheet, ImageBackground } from "react-native";
import { Root } from "./node_modules/native-base";
import LinearGradient from "./node_modules/react-native-linear-gradient";

const Background = (props) => {
  return (
    <LinearGradient
      colors={["#fff", "#FF4500"]}
      style={{ flexGrow: 1 }}
    ></LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
});

export default Background;
