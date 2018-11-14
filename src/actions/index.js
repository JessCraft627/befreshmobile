export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin())
    return fetch('https://befresh-api.herokuapp.com/api/v1/products')
      .then(res => res.json())
      .then(json => {
         setInterval(() => {
           dispatch(fetchProductsSuccess(json))}, 500);
        return json;
      })
  };
}


export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});
