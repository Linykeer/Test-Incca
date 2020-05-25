import React from 'react';
import {Input, Item, Label, Form} from 'native-base';

const Form1 = (props) => {
  return (
    <Form style={{paddingRight: 10}}>
      <Item floatingLabel>
        <Label style={{color: '#fff'}}>Nome do Usuario</Label>
        <Input
          style={{color: '#fff'}}
          type="text"
          maxLength={30}
          onChangeText={(e) => props.handleChange(e, 'nome')}
          value={props.usuario.nome}
        />
      </Item>
      <Item floatingLabel>
        <Label style={{color: '#fff'}}>Contato</Label>
        <Input
          style={{color: '#fff'}}
          type="text"
          maxLength={30}
          onChangeText={(e) => props.handleChange(e, 'contato')}
          value={props.usuario.contato}
        />
      </Item>
    </Form>
  );
};

export default Form1;