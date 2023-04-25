import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_DOGS_NAME = "GET_DOGS_NAME";

export const getDogs = () => {
  return async function (dispatch) {
    const dogsApi = await axios.get("http://localhost:3001/Dogs ");
    const dogs = dogsApi.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDog = (id) => {
  return async function (dispatch) {
    const dogsApi = await axios.get(`http://localhost:3001/Dogs/${id}`);
    const dog = dogsApi.data;
    dispatch({ type: GET_DOG, payload: dog });
  };
};

export const getDogsName = (dogNames) => {
  return async function (dispatch) {
    const dogsApi = await axios.get(
      `http://localhost:3001/Dogs/name?name=${dogNames}`
    );
    const dogs = dogsApi.data;
    dispatch({ type: GET_DOGS_NAME, payload: dogs });
  };
};
