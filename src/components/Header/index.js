import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInSucces } from '../../store/modules/auth/actions';

import { removeUser } from '../../helpers/auth';
import { getItem } from '../../helpers/storage';

import logo from '../../assets/logo.svg';
import logout from '../../assets/header/logout.svg';

import { Container, Content, Profile, AvatarProfile } from './styles';

export default function Header({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    const userStorage = getItem('user');
    if (userStorage) {
      dispatch(signInSucces(userStorage));
    }
  }, []);

  const logoutSession = () => {
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

        {user && (
          <aside>
            <Profile>
              <AvatarProfile>
                <strong>ADM</strong>
              </AvatarProfile>
              <div>
                <strong>{user.username}</strong>
                <small>{user.email}</small>
              </div>
              <img
                src={logout}
                alt="logout"
                className="logout"
                onClick={() => logoutSession()}
              />
            </Profile>
          </aside>
        )}
      </Content>
    </Container>
  );
}
