import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import { checkAccount } from "../components/helpers";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

import { routes } from "./routes";

const login = new Login();

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { dataValid: false };
  }

  async componentDidMount() {
    // const checkValid = await checkAccount();
    this.setState({ dataValid: checkValid });
  }

  render() {
    const { dataValid } = this.state;
    const scenes = Actions.create(
      <Scene key="root">
        <Scene
          key="login"
          component={Login}
          title="Login"
          type="reset"
          hideNavBar={true}
          // initial={!dataValid}
        />
        <Scene
          key="home"
          component={Home}
          title="Home"
          type="reset"
          hideNavBar={true}
        />
        {routes.map((item) => (
          <Scene
            key={item.key}
            component={item.component}
            title={item.title}
            hideNavBar={item.hideNavBar}
          />
        ))}
      </Scene>
    );
    return <Router scenes={scenes} />;
  }
}
