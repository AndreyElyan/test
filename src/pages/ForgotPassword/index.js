import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
  WrapperStrong,
} from './styles';

import logo from '../../assets/logo_login.svg';

export default function ForgotPassword() {
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

          <WrapperStrong>
            <strong>
              Digite o e-mail cadastrado para o envio de uma nova senha.
            </strong>
          </WrapperStrong>

          <WrapperLogin>
            <InputLogin
              name="email"
              type="email"
              value={email}
              placeholder="Senha"
            />
          </WrapperLogin>

          <WrapperFooter>
            <button type="submit">Enviar</button>
            <Link to="/login">Já possuo login</Link>
          </WrapperFooter>
        </Form>
      </RightWrapper>
    </Container>
  );
}
