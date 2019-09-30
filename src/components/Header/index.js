import React from 'react';
import { Link } from 'react-router-dom';

import { removeUser } from '../../helpers/auth';

import logo from '../../assets/logo.svg';
import logout from '../../assets/header/logout.svg';

import { Container, Content, Profile, AvatarProfile } from './styles';

export default function Header({ history }) {
  const logoutSession = prop => {
    removeUser();

    history.push('/login');
  };

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="ABF" className="logo" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <AvatarProfile>
              <strong>ADM</strong>
            </AvatarProfile>
            <div>
              <strong>Andrey Silveira</strong>
              <small>a.elyan.s@gmail.com</small>
            </div>
            <img
              src={logout}
              alt="logout"
              className="logout"
              onClick={() => logoutSession()}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
