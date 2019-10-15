import { SET_VALUE } from '../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {...state,
        ...action.payload
      }

    default:
      return state;
  }
};