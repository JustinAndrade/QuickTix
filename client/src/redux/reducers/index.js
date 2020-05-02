import {
  API_REQUEST_START,
  API_REQUEST_SUCCESS,
  API_REQUEST_FAILURE,
} from "../actions";

const initialState = {
  error: null,
  tickets: [],
  makingApiRequest: false,
  user_id: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST_START:
      return {
        ...state,
        makingApiRequest: true,
      };
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        makingApiRequest: false,
        tickets: action.payload || state.tickets,
      };
    case API_REQUEST_FAILURE:
      return {
        ...state,
        makingApiRequest: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
