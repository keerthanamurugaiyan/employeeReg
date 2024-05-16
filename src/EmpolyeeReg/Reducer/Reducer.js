import { CREATE_INPUT, GET_INPUT, DELETE_INPUT, GETBYID_INPUT, UPDATE_INPUT } from './Action/Type';

const initialState = {
  inputs: [],
  input: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INPUT:
      return {
        ...state,
        inputs: [...state.inputs, action.payload],
      };
    case UPDATE_INPUT:
      return {
        ...state,
        inputs: state.inputs.map((input) => (input.id === action.payload.id ? action.payload : input)),
      };
    case DELETE_INPUT:
      return {
        ...state,
        inputs: [...state.inputs.filter((input) => input.id !== action.payload)],
      };
    case GET_INPUT:
      return {
        ...state,
        inputs: action.payload,
      };
    case GETBYID_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;