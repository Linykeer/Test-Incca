import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Root } from "native-base";
import image from '../assets/imgs/Logo1.png';
const BackgroundImage = (props) => {
  return (
    <Root>
      <ImageBackground source={image} style={styles.backgroundImage}>
        {props.children}
      </ImageBackground>
    </Root>
  );
};
const styles = StyleSheet.create ({
  backgroundImage: {
    flexGrow: 1,
    marginTop: '30%',
    width: '100%',
    height: '35%',
  

    
  },
});

export default BackgroundImage;
