import { useContext } from 'react';
import { EventContext } from '../../contexts/EventContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, Outlet, useParams } from 'react-router-dom';

export const EventOwner = ({children}) => {
  const { eventId } = useParams()
  const { getEvent } = useContext(EventContext);
  const { userId } = useContext(AuthContext);

  const currEvent = getEvent(eventId);
  

  if (currEvent._ownerId !== userId) {
    return <Navigate to={`/catalog/${eventId}`} replace/>
  }

  return {children} ? <>{children}</> : <Outlet />;
};
