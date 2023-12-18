import { createContext } from 'react';

import * as attendService from '../services/attendService';
export const AttendContext = createContext();

export const AttendProvider = ({ children }) => {
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
