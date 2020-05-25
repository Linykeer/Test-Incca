import React from 'react';
import {Input, Item, Label, Form} from 'native-base';

const Form2 = (props) => {
  return (
    <Form style={{paddingRight: 10}}>
      <Item floatingLabel>
        <Label
          style={{color: '#fff'}}
          type="number"
          maxLength={30}
          onChangeText={(e) => props.handleChange(e, 'cep')}
          value={props.usuario.cep}>
          CEP do Usuario
        </Label>
        <Input style={{color: '#fff'}} />
      </Item>
      <Item floatingLabel>
        <Label
          style={{color: '#fff'}}
          type="text"
          maxLength={30}
          onChangeText={(e) => props.handleChange(e, 'rua')}
          value={props.usuario.rua}>
          Rua
        </Label>
        <Input style={{color: '#fff'}} />
      </Item>
      <Item floatingLabel>
        <Label
          style={{color: '#fff'}}
          type="text"
          maxLength={30}
          onChangeText={(e) => this.handleChange(e, 'bairro')}
          value={props.usuario.bairro}>
          Bairro
        </Label>
        <Input style={{color: '#fff'}} />
      </Item>

      <Item floatingLabel>
        <Label
          style={{color: '#fff'}}
          type="number"
          maxLength={30}
          onChangeText={(e) => this.handleChange(e, 'numero')}
          value={props.usuario.numero}>
          Nº
        </Label>
        <Input style={{color: '#fff'}} />
      </Item>
    </Form>
  );
};

export default Form2;