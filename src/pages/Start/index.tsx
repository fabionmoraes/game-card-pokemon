import React, { useEffect } from 'react';

import { Zoom } from 'react-awesome-reveal';

import { useStart } from '../../hooks/start';

import Loading from '../../components/Loading';
import Card from '../../components/Card';
import Header from '../../components/Header';
import GameOver from '../../components/GameOver';
import Finished from '../../components/Finished';

import { Container, Cards, Grid, Modal } from './styles';

interface IHandleFlipping {
  index: number;
  id: number;
}

export const Start: React.FC = () => {
  const {
    fetchCards,
    data,
    loading,
    gameOver,
    finished,
    modal,
    flip,
    selected,
    firstSelected,
    handleHits,
    handleFlip,
    handleSelected,
    handleFirstSelected,
  } = useStart();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleFlipping = ({ index, id }: IHandleFlipping) => {
    handleFlip(index);

    if (firstSelected === id) {
      const filterSelected = selected.filter(item => item === id);
      handleSelected(id);

      handleHits(filterSelected.length);
    }
  };

  return (
    <>
      <Container filter={modal}>
        <Header dataLength={data.length} />
        {loading ? (
          <Loading />
        ) : (
          <Zoom style={{ width: '100%' }}>
            <Cards>
              <Grid>
                {data.map((item, index) => {
                  const filterSelected = selected.filter(s => s === item.id);

                  const verifyIfDuplicateSelected =
                    filterSelected.length > 1 && selected.includes(item.id);

                  const isFlip = verifyIfDuplicateSelected || flip === index;

                  return (
                    <Card
                      key={String(index)}
                      flip={isFlip}
                      data={item}
                      count={index + 1}
                      handleClick={() => {
                        handleFirstSelected(item.id);
                        handleFlipping({ index, id: item.id });
                      }}
                    />
                  );
                })}
              </Grid>
            </Cards>
          </Zoom>
        )}
      </Container>

      {modal && (
        <Modal>
          {gameOver && <GameOver />}
          {finished && <Finished />}
        </Modal>
      )}
    </>
  );
};

export default Start;
