import axios from "axios";
import { PRODUCT_DETAILS_FAILS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../reducers/constants";
import { listProduct, readProduct } from "../Api/products";


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await listProduct();
        dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
    });
    } catch (error) {
        dispatch({
        type: PRODUCT_LIST_FAILS,
        payload:
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    });

    }
}


export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await readProduct(id);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};