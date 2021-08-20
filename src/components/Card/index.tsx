import React, { useEffect, useRef, useState } from 'react';

import ReactCardFlip from 'react-card-flip';

import { IData } from '../../hooks/types';

import { Card, Button } from './styles';

interface ButtonProps {
  flip: boolean;
  data: IData;
  count: number;
  handleClick: any;
}

const CardContainer: React.FC<ButtonProps> = ({
  flip,
  data,
  count,
  handleClick,
}) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);

  return (
    <Button onClick={flip ? () => console.log('já ativo') : handleClick}>
      <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
        <Card ref={ref} height={width + width / 3} bg>
          <p>{count}</p>
        </Card>
        <Card height={width + width / 3} bg={false}>
          {flip && (
            <>
              <img src={data.urlImage} alt={data.name} width="100%" />
              <span>{data.name}</span>
            </>
          )}
        </Card>
      </ReactCardFlip>
    </Button>
  );
};

export default CardContainer;
