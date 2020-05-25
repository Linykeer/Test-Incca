import React, { Component } from "react";
import { Toolbar } from "../../components/index";
import { Actions } from "react-native-router-flux";
import LinearGradient from "react-native-linear-gradient";
import {
  Content,
  Input,
  Item,
  Container,
  Text,
  Label,
  Form,
  Button,
  Row,
  Col,
} from "native-base";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

import { View, StyleSheet } from "react-native";

export default class AdicionarUsuario extends Component {
  goTo(menu) {
    Actions[menu]();
  }
  render() {
    return (
      <LinearGradient colors={["#000", "#FFA500"]} style={{ flexGrow: 1 }}>
        <Toolbar title={this.props.title} goTo={this.goTo} />
        <ProgressSteps
          activeStepIconBorderColor={"#fff"}
          progressBarColor={"#fff"}
          disabledStepIconColor={"#fff"}
          labelColor={"#fff"}
          activeStepNumColor={"#fff"}
          disabledStepNumColor={"#7159c1"}
          activeStepIconColor={"#00e868"}
          activeLabelColor={"#00e868"}
          completedProgressBarColor={"#00e868"}
          completedStepIconColor={"#00e868"}
        >
          <ProgressStep
            label="Dados do Usuario"
            nextBtnText={"Próximo"}
            nextBtnStyle={{
              backgroundColor: "#FF4500",
              borderRadius: 6,
              width: 120,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            nextBtnTextStyle={{ color: "#fff" }}
            nextBtnDisabled={false}
            previousBtnTextStyle={{ color: "#00e868" }}
          >
            <Form style={{ paddingRight: 10 }}>
              <Item floatingLabel>
                <Label style={{ color: "#fff" }}>Nome do Usuario</Label>
                <Input style={{ color: "#fff" }} />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: "#fff" }}>Contato</Label>
                <Input style={{ color: "#fff" }} />
              </Item>
            </Form>
          </ProgressStep>
          <ProgressStep
            label="Endereço do Usuario"
            nextBtnText={"Próximo"}
            previousBtnText={"Anterior"}
            nextBtnStyle={{
              backgroundColor: "#FF4500",
              borderRadius: 6,
              width: 120,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            nextBtnTextStyle={{ color: "#fff" }}
            previousBtnStyle={{
              backgroundColor: "#FF4500",
              borderRadius: 6,
              width: 120,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            previousBtnTextStyle={{ color: "#fff" }}
            nextBtnDisabled={false}
          >
            <Form style={{ paddingRight: 10 }}>
              <Item floatingLabel>
                <Label style={{ color: "#fff" }}>CEP do Usuario</Label>
                <Input style={{ color: "#fff" }} />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: "#fff" }}>Rua</Label>
                <Input style={{ color: "#fff" }} />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: "#fff" }}>Bairro</Label>
                <Input style={{ color: "#fff" }} />
              </Item>

              <Item floatingLabel>
                <Label style={{ color: "#fff" }}>Nº</Label>
                <Input style={{ color: "#fff" }} />
              </Item>
            </Form>
          </ProgressStep>
        </ProgressSteps>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonConfirm: {
    borderRadius: 6,
    backgroundColor: "#00e868",
  },
  viewButton: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 50,
  },
});
