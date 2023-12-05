import { useState } from 'react';
import { getUserData, setUserData } from '../utils/util';

export const useLocalStorage = (initValue) => {
  const [state, setState] = useState(() => {
    const persistedState = getUserData();
    if(persistedState) {
        return persistedState;
    }

    return initValue;
  });

  const setLocalStorageState = (data) => {
    setState(data);

    setUserData(data);
  };

  return [state, setLocalStorageState];
};
