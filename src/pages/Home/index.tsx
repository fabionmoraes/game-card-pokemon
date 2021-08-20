import React from 'react';

import { Zoom, Fade } from 'react-awesome-reveal';

import { useStart } from '../../hooks/start';

import Button from '../../components/Button';

import { Container } from './styles';

const Home: React.FC = () => {
  const { handleStart } = useStart();

  return (
    <Container>
      <Zoom direction="up">
        <img src="/static/logo.svg" alt="Logo" />
      </Zoom>

      <Fade duration={4000}>
        <Button onClick={handleStart}>Iniciar</Button>
      </Fade>
    </Container>
  );
};

export default Home;
