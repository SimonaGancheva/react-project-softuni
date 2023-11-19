import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/events';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const events = Object.values(result);

    return events;
};

export const getById = async (eventId) => {
    const result = await request.get(`${baseUrl}/${eventId}`);
    return result;
}