import { Outlet } from 'react-router-dom';
import { Container, SpaceApp } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <SpaceApp>
        <Outlet />
      </SpaceApp>
    </Container>
  );
};
