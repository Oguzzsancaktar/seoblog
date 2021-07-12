import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const signup = (user) => {

  return fetch(`${API}/signup`, {
    method: 'POST',
    mode:'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify(user)
  })
  .then((response) => {
    return response.json();
  })
  .catch((err) => console.log(err));
};
