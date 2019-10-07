import styled from 'styled-components';

export const Container = styled.div`
  background: #0f1b46;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img.logo {
      margin-right: 20px;
      padding-right: 20px;
      transition: 0.3s;
      &:hover {
        height: 40px;
      }
    }

    a {
      font-weight: bold;
      color: #f9f9f9;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const AvatarProfile = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ed3a48;
  border-radius: 50%;
  border: 0;

  strong {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;

  div {
    text-align: right;
    margin-right: 65px;

    strong {
      display: block;
      color: #f9f9f9;
      margin-left: 10px;
    }

    small {
      margin-top: 5px;
      display: block;
      color: #f9f9f9;
      margin-left: 10px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #f9f9f9;
    }
  }

  img.logout {
    width: 30px;
    height: 30px;
    transition: 0.1s;

    &:hover {
      height: 45px;
      cursor: pointer;
    }
  }
`;
