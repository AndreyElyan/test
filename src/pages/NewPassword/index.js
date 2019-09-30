import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import Checkbox from '4all-ui/components/Checkbox';
import { error } from '../../services/notifier';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  LeftWrapper,
  RightWrapper,
  WrapperTitles,
  Form,
  HeaderLogin,
  InputLogin,
  WrapperLogin,
  WrapperFooter,
  KeepConnected,
  WrapperSignIn,
} from './styles';

import logo from '../../assets/logo_login.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Necessário informar um e-mail'),
  password: Yup.string().required('A senha é obrigatória'),
});

if (!schema) {
  error('erro');
}

export default function NewPassword() {
  const dispatch = useDispatch();

  const [email] = useState('');
  const [password] = useState('');

  function handleSubmit(event) {
    if (event) event.preventDefault();
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <LeftWrapper>
        <img src={logo} alt="ABF" />

        <WrapperTitles>
          <h1>Bem vindo !</h1>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </strong>
        </WrapperTitles>
      </LeftWrapper>

      <RightWrapper>
        <Form onSubmit={handleSubmit}>
          <HeaderLogin>
            <strong>Login</strong>
          </HeaderLogin>

          <WrapperLogin>
            <InputLogin
              name="password"
              type="password"
              value={password}
              placeholder="Senha"
            />
            <InputLogin
              name="password"
              type="password"
              value={password}
              placeholder="Confirmar senha"
            />
          </WrapperLogin>

          <WrapperFooter>
            <KeepConnected>
              <Checkbox checked={false} />
              <strong>Manter-me conectado</strong>
            </KeepConnected>

            <WrapperSignIn>
              <button type="submit">Continuar</button>
            </WrapperSignIn>
          </WrapperFooter>
        </Form>
      </RightWrapper>
    </Container>
  );
}
