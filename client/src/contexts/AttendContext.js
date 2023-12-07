import { createContext, useContext, useEffect } from 'react';

import * as attendService from '../services/attendService';
import { EventContext } from './EventContext';

export const AttendContext = createContext();

export const AttendProvider = ({ children }) => {
    const {} = useContext(EventContext);
  

  
};
