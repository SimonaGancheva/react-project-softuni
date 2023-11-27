import { clearUserData, getUserData } from '../utils/util';

const host = 'http://localhost:3030';

const request = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };

  const userData = getUserData();

  if (userData) {
    const token = userData.accessToken;
    options.headers['X-Authorization'] = token;
  }

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    let result;

    if (response.status != 204) {
      result = await response.json();
    }

    if (response.ok == false) {
      if (response.status == 403) {
        clearUserData();
      }

      const error = result;
      throw error;
    }

    return result;
  } catch (err) {
    alert(err.message);
    throw err;
  }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');
