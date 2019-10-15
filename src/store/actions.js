import axios from 'axios';

import { SET_VALUE, GET_DATA, POST_DATA, LOAD_DATA, ABORT_DATA } from './types';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const setValue = payload => ({
  type: SET_VALUE,
  payload
});

export const postData = payload => ({
  type: POST_DATA,
  payload
});

export const loadData = payload => ({
  type: LOAD_DATA,
  payload
});

export const abortData = payload => ({
  type: ABORT_DATA,
  payload
});

export const setData = (form, source ) => async dispatch => {
  axios.post(proxyurl + 'http://test.clevertec.ru/tt/meta',  {form} ,{
    cancelToken: source.token
}).then( async res => {
    await dispatch({
      type: LOAD_DATA,
      payload: res.data
    });
    setTimeout(() => alert(res.status + ':' + res.statusText ), 0);
})
};

export const getData = () => async dispatch => {
  const response = await axios.get( proxyurl + 'http://test.clevertec.ru/tt/meta' ,
  {
  headers: {
    'Access-Control-Allow-Origin': true,
  },
});

  dispatch({
    type: GET_DATA,
    payload: response.data
  });
};