import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Main } from './SharedLayout.styled';


export const SharedLayout = () => {
  return (
    <>
      <Header>
        <AppBar />
      </Header>
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
