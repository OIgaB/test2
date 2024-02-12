import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import { StyledWrapper, StyledContent } from './Layout.styled';

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </StyledWrapper>
  );
};

export default Layout;
