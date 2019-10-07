import React, { useState, useEffect } from 'react';

import Login from './partials/Login';
import RecoveryPassword from './partials/RecoveryPassword';

import { isAuthenticated } from '../../helpers/auth';

import {
  Wrapper,
  Container,
  LeftWrapper,
  RightWrapper,
  WrapperTitles,
} from './styles';

import logo from '../../assets/logo_login.svg';

const MAP_STEPS = {
  LOGIN: 0,
  PASSWORD_RECOVERY: 1,
};

export default function SignIn({ history }) {
  const [step, setStep] = useState(MAP_STEPS.LOGIN);

  useEffect(() => {
    const redirect = async () => {
      if (await isAuthenticated()) {
        history.push('/');
      }
    };

    redirect();
  }, [history]);

  return (
    <Wrapper>
      <Container>
        <LeftWrapper>
          <img src={logo} alt="ABF" />

          <WrapperTitles>
            <h1>Bem vindo !</h1>
            <strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </strong>
          </WrapperTitles>
        </LeftWrapper>

        <RightWrapper>
          {step === MAP_STEPS.LOGIN && (
            <Login setStep={setStep} steps={MAP_STEPS} />
          )}

          {step === MAP_STEPS.PASSWORD_RECOVERY && <RecoveryPassword />}
        </RightWrapper>
      </Container>
    </Wrapper>
  );
}
