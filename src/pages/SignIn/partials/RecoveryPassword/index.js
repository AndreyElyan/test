import React, { useState } from 'react';

import Checkbox from '4all-ui/components/Checkbox';

import {
  Form,
  WrapperLogin,
  HeaderLogin,
  InputLogin,
  WrapperFooter,
  KeepConnected,
  WrapperSignIn,
  Content,
  TitleForm,
} from '../../styles';

export default function RecoveryPassword() {
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <HeaderLogin>
        <Content>
          <TitleForm>Recuperar senha</TitleForm>
        </Content>
      </HeaderLogin>

      <WrapperLogin>
        <Content>
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

      <WrapperFooter>
        <KeepConnected>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          <strong>Manter-me conectado</strong>
        </KeepConnected>

        <WrapperSignIn>
          <button type="submit">Continuar</button>
        </WrapperSignIn>
      </WrapperFooter>
    </Form>
  );
}
