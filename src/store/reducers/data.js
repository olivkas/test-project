import { GET_DATA, POST_DATA, LOAD_DATA, ABORT_DATA } from '../types';

const initialState = {
  title:'',
  image:'',
  fields:[],
  loading: true,
  cancel: false,
  result: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state,
        ...action.payload,
        loading: false
      };
    case POST_DATA:
      return { ...state,
        ...action.payload,
        cancel: true
      };
      case LOAD_DATA:
          return { ...state,
            ...action.payload,
            result: true,
            cancel: false
          };
      case ABORT_DATA:
        return { ...state,
        ...action.payload,
        result: false,
        cancel: false
        };
    default:
      return state;
  }

};