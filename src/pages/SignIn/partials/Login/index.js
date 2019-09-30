import React, { useState } from 'react';
import Checkbox from '4all-ui/components/Checkbox';

import Left from '../../../../components/Icons/Left';

import api from '../../../../services/api';
import history from '../../../../services/history';
import { error } from '../../../../services/notifier';

import { setUserSession } from '../../../../helpers/auth';

import {
  Form,
  WrapperLogin,
  WrapperArrow,
  InputLogin,
  HeaderLogin,
  WrapperFooter,
  KeepConnected,
  WrapperSignIn,
  Anchor,
  Content,
  ContentHeader,
  TitleForm,
  DescriptionForm,
} from '../../styles';

export default function Login({ setStep, steps }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const [isFirst, setFirst] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    setFirst(false);

    try {
      const { data } = await api.post('/admin/login', { email, password });
      setUserSession(data.bearer);
      if (data.isFirst) setFirst(true);
      history.push('/');
    } catch (err) {
      error('Usuário ou senha incorretos');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <HeaderLogin>
        <Content>
          <ContentHeader>
            {isFirst && (
              <WrapperArrow onClick={setFirst.bind(null, false)}>
                <Left />
              </WrapperArrow>
            )}
            <TitleForm>Login</TitleForm>
          </ContentHeader>
        </Content>
      </HeaderLogin>
      <WrapperLogin>
        <Content>
          {isFirst && (
            <DescriptionForm>
              Digite uma nova senha para continuar
            </DescriptionForm>
          )}

          <InputLogin
            name="email"
            type="email"
            value={email}
            placeholder="Seu e-mail"
            onChange={setEmail}
            width="100%"
            height="40px"
          />

          <InputLogin
            name="password"
            type="password"
            value={password}
            placeholder="Sua senha secreta"
            onChange={setPassword}
            width="100%"
          />
        </Content>
      </WrapperLogin>

      <Content>
        <WrapperFooter>
          <KeepConnected>
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            <strong>Manter-me conectado</strong>
          </KeepConnected>

          <WrapperSignIn>
            <button type="submit">Continuar</button>

            <Anchor onClick={() => setStep(steps.PASSWORD_RECOVERY)}>
              <strong>Esqueci minha senha</strong>
            </Anchor>
          </WrapperSignIn>
        </WrapperFooter>
      </Content>
    </Form>
  );
}
