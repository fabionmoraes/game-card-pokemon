import React, { useEffect } from 'react';

import { RiTimerLine } from 'react-icons/ri';
import { FiTarget } from 'react-icons/fi';

import { useStart } from '../../hooks/start';

import { Container } from './styles';

interface IHeader {
  dataLength: number;
}

const Header: React.FC<IHeader> = ({ dataLength }) => {
  const {
    hits,
    minutes,
    finished,
    gameOver,
    seconds,
    handleTime,
    handleModal,
    handleGameOver,
  } = useStart();

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (finished) {
        return;
      }

      if (gameOver) {
        return;
      }

      if (seconds > 0) {
        handleTime({ type: 'seconds', time: seconds - 1 });
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (!gameOver && dataLength > 0) {
            handleGameOver(true);
            handleModal();
          }
          clearInterval(myInterval);
        } else {
          handleTime({ type: 'seconds', time: 59 });
          handleTime({ type: 'minutes', time: minutes - 1 });
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes, handleTime, finished, gameOver, dataLength]); //eslint-disable-line

  return (
    <Container>
      <div className="logo">
        <img src="/static/logo.svg" alt="Acerte Cartas" />
      </div>
      <div className="content">
        <div>
          <span className="title">
            <RiTimerLine /> Tempo:
          </span>
          <span className="count">
            {minutes === 0 && seconds === 0 ? (
              '0:00'
            ) : (
              <>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </>
            )}
          </span>
        </div>
        <div>
          <span className="title">
            <FiTarget style={{ marginRight: 4 }} /> Acertos:
          </span>
          <span className="count">{hits}</span>
        </div>
      </div>
    </Container>
  );
};

export default Header;
