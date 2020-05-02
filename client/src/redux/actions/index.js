import axios from "axios";

export const API_REQUEST_START = "API_REQUEST_START";
export const API_REQUEST_SUCCESS = "API_REQUEST_SUCCESS";
export const API_REQUEST_FAILURE = "API_REQUEST_FAILURE";

const SWIFTTIX_API_DOMAIN = "http://localhost:5000";

export const getTickets = () => async (dispatch) => {
  dispatch({ type: API_REQUEST_START });
  try {
    const { data } = await axios.get(`${SWIFTTIX_API_DOMAIN}/tickets`);
    dispatch({ type: API_REQUEST_SUCCESS, payload: data.tickets });
  } catch (err) {
    dispatch({ type: API_REQUEST_FAILURE, payload: err });
  }
};
