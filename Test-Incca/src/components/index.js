import React from "react";
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import {
  Header,
  Icon,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  View,
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import Login from "../pages/login/Login";
import usuario from "../assets/imgs/add.png";
import usuarios from "../assets/imgs/usuario.png";


const { width } = Dimensions.get("screen");

const login = new Login();

const estilo = (props) => {
  if (props.amount % 2 !== 0 && props.index === props.amount - 1) {
    return { minWidth: "100%", minHeight:60, justifyContent:'center',};
  } else return { minWidth: "33%" };
};
const estiloText = (props) => {
  if (props.amount % 2 !== 0 && props.index === props.amount - 1) {
    return {fontSize: 30};
  } else return { fontSize: 16, fontWeight: "cover"  };
};


export const MenuItem = (props) => {
  const changeImage = (text) => {
    switch (text) {
      case "Visualizar usuarios":
        return usuarios;
      case "Adicionar usuario":
        return usuario;
    }
  };

  return (
    <TouchableOpacity style={[styles.menuItem]} onPress={() => props.goTo()}>
      {}

      <ImageBackground
        source={changeImage(props.menu.title)}
        resizeMode="cover"
        imageStyle={{ borderRadius: 6 }}
        style={[styles.menuImage, estilo(props)]}
      >
        <Text
          style={[styles.menuText, estiloText(props) ]}
        >
          {props.menu.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const Toolbar = (props) => {
  return (
    <Header
      androidStatusBarColor="#FF8C00"
      style={{ backgroundColor: "#FF8C00", width: "100%" }}
    >
      <Left style={{ flex: 0.5 }}>
        {props.title !== "Home" && (
          <Button
            transparent
            onPress={() => props.goTo("home")}
            style={{ width: 250 }}
          >
            <Icon name="arrow-round-back" />
          </Button>
        )}
      </Left>

      <Body
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title style={{ color: "#FFF", fontWeight: "bold" }}>
          {props.title}
        </Title>
      </Body>

      <Right style={{ flex: 0.5 }}>
        {props.title === "Home" && (
          <Button iconRight transparent onPress={() => login.logout()}>
            <Text style={{ marginRight: 4 }}>Sair</Text>
            <Icon name="md-exit" />
          </Button>
        )}
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  icons: {
    fontSize: 32,
    color: "#7159c1",
  },
  menuItem: {
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#D2691E",
  },
  menuImage: {
    width: width * 0.44,
    minHeight: 130,
    justifyContent: "flex-end",
  },
  menuText: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowRadius: 2,
    color: "#000"
  
  },
});
