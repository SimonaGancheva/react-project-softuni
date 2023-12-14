import * as request from './requester';

const endpoints = {
  allEvents: '/data/events?sortBy=_createdOn%20asc',
  byId: '/data/events/',
  addEvent: '/data/events',
};

export const getAll = async () => {
  const result = await request.get(endpoints.allEvents);
  const events = Object.values(result);

  return events;
};

export const getById = async (eventId) => {
  return await request.get(endpoints.byId + eventId);
};

export const create = async (data) => {
  return await request.post(endpoints.addEvent, data);
};

export const deleteById = async (eventId) => {
  return await request.del(endpoints.byId + eventId);
};

export const edit = async (eventId, data) => {
  return await request.put(endpoints.byId + eventId, data);
}
