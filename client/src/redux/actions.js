import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_DOGS_NAME = "GET_DOGS_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const CREATE_DOG = "CREATE_DOG";
export const GET_ORDER_A_Z = "GET_ORDER_A_Z";
export const GET_ORDER_Z_A = "GET_ORDER_Z_A";

export const getDogs = () => {
  return async function (dispatch) {
    const dogsApi = await axios.get("http://localhost:3001/Dogs");
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

export const getTemperaments = () => {
  return async function (dispatch) {
    const temperamentsBdd = await axios.get(
      `http://localhost:3001/temperaments`
    );
    const temperaments = temperamentsBdd.data;
    dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
  };
};

export const createDog = (form) => {
  return async function (dispatch) {
    const response = await axios.post(`http://localhost:3001/dogs`, form);

    const createdDog = response.data;
    dispatch({ type: CREATE_DOG, payload: createdDog });
  };
};
