import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { Button, Item, Input, Toast, Text, Root } from "native-base";
// import ModalLoading from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";
import styles from "./LoginStyle";
import api from "../../services/api";
import BackgroundImage from "../../components/Background";
import AntDesign from "react-native-vector-icons/AntDesign";
const { height, width } = Dimensions.get("screen");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      showPassword: false,
      loading: false,
      visibleModalLoading: false,
      visibleModalForgetPass: false,
      menuAcess: true,
      typeAcess: "",
    };
    this.showModalForgetPass = this.showModalForgetPass.bind(this);
  }

  setData(data) {
    AsyncStorage.multiSet([
      ["token", JSON.stringify({ token: data.token })],
      ["usuario", JSON.stringify({ usuario: data.usuario })],
    ]).then(() => Actions.home());
  }

  async login() {
    const { user, password, typeAcess } = this.state;

    if (!user && !password) {
      return Toast.show({
        text: "Campos vazios ou inválidos",
        buttonText: "OK",
        type: "danger",
        duration: 4000,
        useNativeDriver: true,
      });
    }

    if (typeAcess === "Usuario") {
      return (
        
        AsyncStorage.multiSet([
          ["tipoAcesso", JSON.stringify({ tipoAcesso: typeAcess })],
          ["usuario", JSON.stringify({ usuario: "data.usuario" })],
        ]).then(() => Actions.home())
      );
    }
    
        AsyncStorage.multiSet([
          ["tipoAcesso", JSON.stringify({ tipoAcesso: typeAcess })],
          ["usuario", JSON.stringify({ usuario: "data.usuario" })],
        ]).then(() => Actions.home())
      
    
  }

  logout() {
    AsyncStorage.multiRemove(["token", "usuario", "tipoAcesso"]);
    Actions.login();
  }

  onHandler(value, name) {
    this.setState({ [name]: value });
  }

  showPassword() {
    this.setState((previousState) => ({
      showPassword: !previousState.showPassword,
    }));
  }

  showMenuAcess(param) {
    this.setState((previousState) => ({
      menuAcess: !previousState.menuAcess,
      typeAcess: param,
    }));
  }

  showModalForgetPass() {
    this.setState((prevState) => ({
      visibleModalForgetPass: !prevState.visibleModalForgetPass,
    }));
  }

  render() {
    const {
      usuario,
      senha,
      showPassword,
      loading,
      visibleModalLoading,
      visibleModalForgetPass,
      menuAcess,
    } = this.state;

    return (
      <React.Fragment>
        {/* <ModalEthernetError route={"login"} /> */}
        {visibleModalLoading ? (
          <ModalLoading isVisible={visibleModalLoading}>
            <ActivityIndicator size="large" color={"#7159c1"} />
          </ModalLoading>
        ) : (
          <LinearGradient colors={["#000", "#FFA500"]} style={{ flexGrow: 1}}>
           <BackgroundImage>
            <View style={styles.container}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </View>
              {menuAcess ? (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.access}>Acessar como:</Text>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => this.showMenuAcess("Usuario")}
                    >
                      <View
                        style={{
                          width: width * 0.4,
                          backgroundColor: "#FF4500",
                          borderRadius: 30,
                          paddingVertical: 20,
                        }}
                      >
                        <Text
                          style={{
                            alignSelf: "center",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                         Usuário
                        </Text>
                      </View>
                    </TouchableOpacity>
                 
                  </View>
                </View>
              ) : (
                <React.Fragment>
                  <Item style={styles.inputBox} regular>
                    <Icon name="user-circle-o" size={20} />
                    <Input
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholder="Usuário"
                      placeholderTextColor="#B0B0B0"
                      onChangeText={(value) => this.onHandler(value, "user")}
                      value={usuario}
                    />
                  </Item>
                  <Item style={styles.inputBox} regular>
                    <Icon name="lock" size={20} />
                    <Input
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholder="Senha"
                      placeholderTextColor="#B0B0B0"
                      secureTextEntry={!showPassword}
                      onChangeText={(value) =>
                        this.onHandler(value, "password")
                      }
                      value={senha}
                    />

                    <Icon2
                      name={!showPassword ? "md-eye-off" : "md-eye"}
                      size={27}
                      onPress={() => this.showPassword()}
                    />
                  </Item>

                  <TouchableOpacity onPress={() => this.showModalForgetPass()}>
                    <Text style={styles.forgetPassword}>
                      Esqueceu sua senha?
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.buttonContainer}>
                    <Button
                      full
                      style={styles.button}
                      onPress={() => this.login()}
                    >
                      {loading ? (
                        <ActivityIndicator size="small" color="#FFF" />
                      ) : (
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                          ACESSAR
                        </Text>
                      )}
                    </Button>

                    <Button
                      full
                      style={[styles.button2, { marginTop: 20 }]}
                      onPress={() => this.showMenuAcess()}
                    >
                      <AntDesign
                        name={"back"}
                        size={25}
                        style={{ color: "#FFF" }}
                      ></AntDesign>
                      <Text>VOLTAR</Text>
                    </Button>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 30,
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 18 }}>
                      Ainda não tem cadastro?{" "}
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#fff",
                          fontSize: 18,
                        }}
                      >
                        Cadastre-se
                      </Text>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              )}
            </View>
            <Root />
            </BackgroundImage>
          </LinearGradient>
        )}
      </React.Fragment>
    );
  }
}
