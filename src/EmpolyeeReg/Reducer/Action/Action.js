import axios from 'axios';
import { CREATE_INPUT, GET_INPUT, DELETE_INPUT, GETBYID_INPUT, UPDATE_INPUT } from './Type';


export const createinput = (input) => {
  return async (dispatch) => {
    const response = await axios.post('https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student', input);
    dispatch({ type: CREATE_INPUT, payload: response.data });
  };
};
export const updateinput = (id, input) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student/${id}`, input);
      dispatch({ type: UPDATE_INPUT, payload: response.data });
    } catch (error) {
      console.error('Error updating input:', error);
    }
  };
};


// export const updateinput = (id,input) => {
//   return async (dispatch) => {
//     const response = await axios.put(`https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student/${id}`, input);
//     dispatch({ type: UPDATE_INPUT, payload: response.data });
//   };
// };


export const deleteinput = (id) => {
  return async (dispatch) => {
    await axios.delete(`https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student/${id}`);
    dispatch({ type: DELETE_INPUT, payload: id });
  };
};

export const getinput = () => {
  return async (dispatch) => {
    const response = await axios.get('https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student');
    dispatch({ type: GET_INPUT, payload: response.data });
  };
};

export const getbyid = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`https://65b77a0946324d531d54ac37.mockapi.io/Employeeregistor/student/${id}`);
    dispatch({ type: GETBYID_INPUT, payload: response.data });
  };
};