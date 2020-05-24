import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Root } from "native-base";
import LinearGradient from "react-native-linear-gradient";

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
