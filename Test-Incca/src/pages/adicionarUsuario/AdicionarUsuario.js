import React, {Component} from 'react';
import {Toolbar} from '../../components/index';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {Input, Item, Label, Form} from 'native-base';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Form1 from './Form1';
import Form2 from './Form2';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export default class AdicionarUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {
        nome: '',
        contato: '',
        cep: '',
        rua: '',
        bairro: '',
        numero: '',
      },
      list: [],
      visibleLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await AsyncStorage.getItem('usuarios')
      .then((item) => {
        console.log('item', item);
        const usuarios = JSON.parse(item);
        this.setState({
          ...this.state,
          list: usuarios.length <= 1 ? usuarios : usuarios.usuarios,
        });
      })
      .finally(() => this.setState({visibleLoading: false}));
  }

  goTo(menu) {
    Actions[menu]();
  }

  handleChange(value, name) {
    this.setState({usuario: {...this.state.usuario, [name]: value}});
  }

  async handleSubmit() {
    const {usuario, list} = this.state;
    await list.push(usuario);
    await this.setUsuario();
  }
  setUsuario() {
    const {list} = this.state;
    AsyncStorage.setItem(
      'usuarios',
      JSON.stringify({usuarios: list}),
    ).then(() => Actions.home());
  }
  render() {
    const {usuario, visibleLoading} = this.state;
    console.log(usuario);
    return (
      <LinearGradient colors={["#000", "#FFA500"]} style={{flexGrow: 1}}>
        <Toolbar title={this.props.title} goTo={this.goTo} />
        {visibleLoading ? (
          <View style={{flexGrow: 1, backgroundColor: '#FF4500'}}>
            <ActivityIndicator size="large" color={'#FF4500'} />
          </View>
        ) : (
          <ProgressSteps
            activeStepIconBorderColor={'#fff'}
            progressBarColor={'#fff'}
            disabledStepIconColor={'#fff'}
            labelColor={'#fff'}
            activeStepNumColor={'#fff'}
            disabledStepNumColor={'#7159c1'}
            activeStepIconColor={'#00e868'}
            activeLabelColor={'#00e868'}
            completedProgressBarColor={'#00e868'}
            completedStepIconColor={'#00e868'}>
            <ProgressStep
              label="Dados do Usuario"
              nextBtnText={'Próximo'}
              nextBtnStyle={{
                backgroundColor: '#FF4500',
                borderRadius: 6,
                width: 120,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              nextBtnTextStyle={{color: '#fff'}}
              nextBtnDisabled={false}
              previousBtnTextStyle={{color: '##FF4500'}}>
              <Form1 usuario={usuario} handleChange={this.handleChange}></Form1>
            </ProgressStep>
            <ProgressStep
              label="Endereço do Usuario"
              finishBtnText={'Confirmar'}
              previousBtnText={'Anterior'}
              nextBtnStyle={{
                backgroundColor: '#FF4500',
                borderRadius: 6,
                width: 120,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              nextBtnTextStyle={{color: '#fff'}}
              previousBtnStyle={{
                backgroundColor: '#FF4500',
                borderRadius: 6,
                width: 120,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              previousBtnTextStyle={{color: '#fff'}}
              nextBtnDisabled={false}
              onSubmit={() => this.handleSubmit()}>
              <Form2 usuario={usuario} handleChange={this.handleChange}></Form2>
            </ProgressStep>
          </ProgressSteps>
        )}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonConfirm: {
    borderRadius: 6,
    backgroundColor: '#00e868',
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 50,
  },
});