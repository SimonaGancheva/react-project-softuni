import * as request from './requester';

const endpoints = {
    allEvents: '/jsonstore/events?sortBy=_createdOn%20desc',
    byId: '/jsonstore/events/',
    addEvent: '/jsonstore/events'
};

export const getAll = async () => {
    const result = await request.get(endpoints.allEvents);
    const events = Object.values(result);

    return events;
};

export const getById = async (eventId) => {
    const result = await request.get(endpoints.byId + eventId);
    return result;
}

export const create = async (data) => {
    const result = await request.post(endpoints.addEvent, data);
    console.log(result);
    return result;
}