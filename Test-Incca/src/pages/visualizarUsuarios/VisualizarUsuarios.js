import React, { Component, Fragment } from "react";
import { Toolbar } from "../../components/index";
import { Actions } from "react-native-router-flux";
import {
  Card,
  List,
  ListItem,
  Root,
  Button,
  Thumbnail,
  Left,
  Body,
  Text,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class VisualizarUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Usuarios: [{}, {}, {}, {}, {}, {}],
      visibleModalLoading: false,
    };
  }
  goTo(menu) {
    Actions[menu]();
  }
  render() {
    const { Usuarios, visibleModalLoading } = this.state;
    return (
      <LinearGradient colors={["#000", "#FFA500"]} style={{ flexGrow: 1 }}>
        <View>
          <Toolbar title={this.props.title} goTo={this.goTo} />
          {visibleModalLoading ? (
            <View style={{ flexGrow: 1, backgroundColor: "#FF4500" }}>
              <ActivityIndicator size="large" color={"#FF4500"} />
            </View>
          ) : (
            <Fragment>
              <ScrollView style={styles.pageSize}>
                <View style={styles.spaceContainer}>
                  <ScrollView nestedScrollEnabled={true}>
                    <Card style={styles.card}>
                      <List>
                        <React.Fragment>
                          <View>
                            {Usuarios.map((item, i) => (
                              <ListItem
                                thumbnail
                                style={{
                                  flex: 1,
                                  marginLeft: 10,
                                  justifyContent: "space-between",
                                }}
                              >
                                <Left>
                                  <Thumbnail
                                    source={require("../../assets/imgs/imgSemImagem.png")}
                                    style={{ opacity: 0.5 }}
                                  />
                                </Left>
                               
                                <View style={{ padding: 10 }}>
                                  <TouchableOpacity
                                    style={styles.buttonDelete}
                                    // onPress={}
                                  >
                                    <MaterialIcons
                                      name="edit"
                                      color="#FF4500"
                                      size={25}
                                    ></MaterialIcons>
                                  </TouchableOpacity>
                                </View>
                                <View style={{ padding: 10 }}>
                                  <TouchableOpacity
                                    style={styles.buttonDelete}
                                    // onPress={}
                                  >
                                    <MaterialIcons
                                      name="delete"
                                      color="#FF4500"
                                      size={25}
                                    ></MaterialIcons>
                                  </TouchableOpacity>
                                </View>
                              </ListItem>
                            ))}
                          </View>
                        </React.Fragment>
                      </List>
                    </Card>
                  </ScrollView>
                </View>
              </ScrollView>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.buttonAdd}
                  onPress={() => Actions.adicionarUsuario()}
                >
                  <MaterialCommunityIcons
                    name="plus-circle"
                    color="#FFF"
                    size={50}
                  ></MaterialCommunityIcons>

                  <Text>Adicionar Usuario</Text>
                </TouchableOpacity>
              </View>
            </Fragment>
          )}
          <Root />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  pageSize: {
    maxHeight: "90%",
  },

  spaceContainer: {
    margin: 10,
  },
  card: {
    borderRadius: 6,
    padding: 5,
  },
  neighborhood: {
    fontSize: 12,
    alignSelf: "flex-start",
  },
  buttonDelete: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  buttonAdd: {
    alignItems: "center",
    margin: 10,
  },
});
