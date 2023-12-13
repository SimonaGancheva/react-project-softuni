import { createContext, useContext, useEffect, useState } from 'react';

import * as attendService from '../services/attendService';
import { EventContext } from './EventContext';
import { AuthContext } from './AuthContext';

export const AttendContext = createContext();

export const AttendProvider = ({ children }) => {
  const { events } = useContext(EventContext);

  const getUserAttendings = async (userId) => {
    return attendService.getOwnAttendingEvents(userId);
  };

  

  const contextData = {
    getUserAttendings,
  };

  return (
    <AttendContext.Provider value={contextData}>
      {children}
    </AttendContext.Provider>
  );
};
