import * as request from './requester';

const endpoints = {
  attend: '/data/going',
  attendantsByEventId: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
  attendanceByUser: (eventId, userId) => `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export const attend = async (eventId) => {
  return request.post(endpoints.attend, {eventId});
}

export const getAttendantsCount = async (eventId) => {
  return request.get(endpoints.attendantsByEventId(eventId));
}

export const getOwnAttendance = async (eventId, userId) => {
  return request.get(endpoints.attendanceByUser(eventId, userId)); // 0 or 1
}