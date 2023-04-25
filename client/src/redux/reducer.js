import { GET_DOG, GET_DOGS, GET_DOGS_NAME } from "./actions";

const initialState = {
  dogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG:
      return { dogs: action.payload };
    case GET_DOGS_NAME:
      return { dogs: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
