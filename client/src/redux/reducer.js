import { GET_DOG, GET_DOGS, GET_DOGS_NAME, GET_TEMPERAMENTS } from "./actions";

const initialState = {
  dogs: [],
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG:
      return { ...state, dogs: action.payload };
    case GET_DOGS_NAME:
      return { ...state, dogs: action.payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
