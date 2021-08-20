import React from 'react';

import Lottie from 'lottie-react-web';

import { useStart } from '../../hooks/start';

import Button from '../../components/Button';

import animation from '../../assets/digimon.json';

import { Animation, Container } from './styles';

const GameOver: React.FC = () => {
  const { hits, handleRestart } = useStart();

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
        <img src="/static/gameover.svg" alt="gameover" />
      </div>
      <div className="title">Acertos: {hits}</div>
      <div className="btn">
        <Button onClick={handleRestart}>Restart</Button>
      </div>
    </Container>
  );
};

export default GameOver;
