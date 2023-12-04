import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as eventService from '../services/eventService';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService.getAll().then((result) => {
      console.log(result);
      setEvents(result);
    });
  }, []);

  const onCreateEventSubmit = async (data) => {
    const newEvent = await eventService.create(data);
    setEvents((state) => [...state, newEvent]);
    navigate('/catalog');
  };

  const onEditEventSubmit = async (data) => {
    const updatedEvent = await eventService.edit(data._id, data);
    setEvents((state) =>
      state.map((x) => (x._id === data._id ? updatedEvent : x))
    );
    navigate(`/catalog/${data._id}`);
  };

  const onDeleteEventSubmit = (eventId) => {
    eventService.deleteById(eventId);
    setEvents((state) => state.filter((x) => x._id !== eventId));
    navigate('/catalog');
  };

  const contextData = {
    events,
    onCreateEventSubmit,
    onEditEventSubmit,
    onDeleteEventSubmit,
  };

  return (
    <EventContext.Provider value={contextData}>
      {children}
    </EventContext.Provider>
  );
};
