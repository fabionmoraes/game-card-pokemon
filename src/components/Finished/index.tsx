import React from 'react';

import Lottie from 'lottie-react-web';

import { useStart } from '../../hooks/start';

import Button from '../../components/Button';

import animation from '../../assets/pikachu.json';

import { Animation, Container } from './styles';

const Finished: React.FC = () => {
  const { hits, handleRestart, handleModal, minutes, seconds } = useStart();

  return (
    <Container>
      <Animation>
        <Lottie
          options={{
            animationData: animation,
          }}
        />
      </Animation>
      <div>
        <img src="/static/finished.svg" alt="gameover" width="100%" />
      </div>
      <div className="title">
        Acertos: {hits} - Tempo: {minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="btn">
        <Button onClick={handleModal}>Visualizar Cartas</Button>
        <Button onClick={handleRestart}>Restart</Button>
      </div>
    </Container>
  );
};

export default Finished;
