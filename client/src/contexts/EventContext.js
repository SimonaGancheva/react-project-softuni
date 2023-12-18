import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as eventService from '../services/eventService';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventService.getAll().then((result) => {
      // console.log(result);
      setEvents(result);
    });
  }, [events.length]);

  const onCreateEventSubmit = async (data) => {
    let newEvent;
    try {
      if (Object.values(data).includes('')) {
        throw new Error('All fields are required!');
      }
      newEvent = await eventService.create(data);
    } catch (err) {
      return alert(err.message);
    }
    setEvents((state) => [newEvent, ...state]);
    navigate('/catalog');
  };

  const onEditEventSubmit = async (data) => {
    let updatedEvent;
    try {
      if (Object.values(data).includes('')) {
        throw new Error('All fields are required!');
      }
      updatedEvent = await eventService.edit(data._id, data);
    } catch (err) {
      return alert(err.message);
    }

    setEvents((state) =>
      state.map((x) => (x._id === data._id ? updatedEvent : x))
    );
    navigate(`/catalog/${data._id}`);
  };

  const onDeleteEventSubmit = (eventId) => {
    try {
      eventService.deleteById(eventId);
    setEvents((state) => state.filter((x) => x._id !== eventId));
    navigate('/catalog');
    } catch(err) {
      return alert(err.message);
    }
  };

  const getEvent = (eventId) => {
    // const event = eventService.getById(eventId);
    const event = events.filter((x) => x._id === eventId).shift();
    return event;
  };

  const onCategoryClick = async (category) => {
    const result = await eventService.getAllByCategory(category);

    setEvents(result);
  };

  const contextData = {
    events,
    onCreateEventSubmit,
    onEditEventSubmit,
    onDeleteEventSubmit,
    getEvent,
    onCategoryClick,
  };

  return (
    <EventContext.Provider value={contextData}>
      {children}
    </EventContext.Provider>
  );
};
