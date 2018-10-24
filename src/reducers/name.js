import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/index';

const initialState = {
  items: [],
  loading: false,
  error: null
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:

      return {
        ...state,
        loading: false,
        items: action.payload.products
      };
    default:
      return state;
  }
}
