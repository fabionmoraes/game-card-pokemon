import React from 'react';

import Lottie from 'lottie-react-web';
import animation from '../../assets/pokemon.json';

import { Animation } from './styles';

const Loading: React.FC = () => {
  return (
    <Animation>
      <Lottie
        options={{
          animationData: animation,
        }}
      />
      <p>carregando</p>
    </Animation>
  );
};

export default Loading;
