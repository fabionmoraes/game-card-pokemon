import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { useHistory } from 'react-router-dom';

import api from '../services/api';
import { IData, IHandleTime } from './types';

interface StartContextData {
  loading: boolean;
  data: IData[];
  start: boolean;
  hits: number;
  minutes: number;
  seconds: number;
  gameOver: boolean;
  finished: boolean;
  modal: boolean;
  flip: number;
  selected: number[];
  firstSelected: number;
  fetchCards(): Promise<void>;
  handleStart(): void;
  handleHits(value: number): void;
  handleFlip(value: number): void;
  handleSelected(value: number): void;
  handleFirstSelected(value: number): void;
  handleModal(): void;
  handleRestart(): void;
  handleTime(data: IHandleTime): void;
  handleGameOver(value: boolean): void;
}

const StartContext = createContext<StartContextData>({} as StartContextData);

const StartProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IData[]>([] as IData[]);
  const [start, setStart] = useState(false);
  const [hits, setHits] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [finished, setFinished] = useState(false);
  const [modal, setModal] = useState(false);

  const [flip, setFlip] = useState(-1);
  const [selected, setSelected] = useState<number[]>([] as number[]);
  const [firstSelected, setFirstSelected] = useState(0);

  useEffect(() => {
    if (data.length && selected.length === data.length) {
      setFinished(true);
      setModal(true);
    }
  }, [selected, data]);

  const fetchCards = useCallback(async () => {
    try {
      const response = await api.get('pokemons');

      const duplicateData = [...response.data, ...response.data];

      setSeconds(20);
      setMinutes(1);

      setData(
        duplicateData.sort(() => {
          return 0.5 - Math.random();
        }),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleStart = useCallback(() => {
    // localStorage.setItem('@AcertCartas:start', 'true');
    setStart(true);
    history.push('/start');
  }, [history]);

  const handleHits = useCallback(
    value => {
      setHits(hits + value);
    },
    [hits],
  );

  const handleFlip = useCallback(value => {
    setFlip(value);
  }, []);

  const handleSelected = useCallback(value => {
    setSelected((state: any) => [...state, value]);
  }, []);

  const handleFirstSelected = useCallback(value => {
    setFirstSelected(value);
  }, []);

  const handleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const handleRestart = useCallback(() => {
    setHits(0);
    setData([]);
    setFlip(-1);
    setSelected([]);
    setFirstSelected(0);
    setGameOver(false);
    setModal(false);

    setLoading(true);
    fetchCards();
  }, [fetchCards]);

  const handleTime = useCallback(({ type, time }) => {
    if (type === 'minutes') {
      setMinutes(time);
    }

    if (type === 'seconds') {
      setSeconds(time);
    }
  }, []);

  const handleGameOver = useCallback(value => {
    setGameOver(value);
  }, []);

  return (
    <StartContext.Provider
      value={{
        loading,
        data,
        start,
        hits,
        minutes,
        seconds,
        gameOver,
        finished,
        modal,
        flip,
        selected,
        firstSelected,
        fetchCards,
        handleStart,
        handleHits,
        handleFlip,
        handleSelected,
        handleFirstSelected,
        handleModal,
        handleRestart,
        handleTime,
        handleGameOver,
      }}
    >
      {children}
    </StartContext.Provider>
  );
};

function useStart(): StartContextData {
  const context = useContext(StartContext);

  if (!context) {
    throw new Error(' useStart must be used within an StartProvider ');
  }
  return context;
}
export { StartProvider, useStart };
