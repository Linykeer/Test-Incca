import React, { Component, Fragment } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Container, Text, Footer, FooterTab, Button, Right } from "native-base";
import { MenuItem, Toolbar } from "../../components/index";
import AsyncStorage from "@react-native-community/async-storage";
import { routes } from "../../routes/routes";
import Background from "../../components/Background";
import LinearGradient from "react-native-linear-gradient";

const { height, width } = Dimensions.get("screen");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLoading: false,
      tipoAcesso: "",
    };
    this.goTo = this.goTo.bind(this);
  }
  async componentDidMount() {
    console.log("entrou");
    await this.setState({ visibleLoading: true });
    await AsyncStorage.multiGet(["tipoAcesso", "usuario"])
      .then((item) => {
        console.log("item", item);
        const tipoAcesso = JSON.parse(item[0][1]);
        const usuario = JSON.parse(item[1][1]);
        this.setState({
          ...this.state,
          tipoAcesso: tipoAcesso.tipoAcesso,
          usuario: usuario,
        });
      })
      .finally(() => this.setState({ visibleLoading: false }));
  }

  renderMenu() {
    const { tipoAcesso } = this.state;

    if (tipoAcesso === "Usuario") {
      return routes.map(
        (item, index) =>
          item.title !== "Vincular usuario" && (
            <MenuItem
              index={index}
              amount={4}
              menu={item}
              goTo={() => this.goTo(item.key)}
              key={item.key}
            />
          )
      );
    }
 
  }

  goTo(menu) {
    Actions[menu]();
  }

  render() {
    const { visibleLoading, tipoAcesso } = this.state;
    console.log(tipoAcesso);
    return (
      <Fragment>
        <Container style={styles.screenContainer}>
          <LinearGradient colors={["#000", "#FFA500"]} style={{ flexGrow: 1 }}>
            <Toolbar title={this.props.title} goTo={this.goTo} />

            {visibleLoading ? (
              <ActivityIndicator size="large" color="#00e868" />
            ) : (
              <ScrollView>
                <View style={styles.body}>{this.renderMenu()}</View>
              </ScrollView>
            )}
          </LinearGradient>
        </Container>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  colorText: {
    color: "#26C6DA",
  },
  screenContainer: {
    width,
    height,
    backgroundColor: "#f5f5f5",
  },
  body: {
    padding: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
