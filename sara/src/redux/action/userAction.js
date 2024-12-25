// // actions/authActions.js
// import axios from 'axios';

// export const loginUser = (credentials) => async (dispatch) => {
//   try {
//     const res = await axios.post('http://localhost:3000/auth/login', credentials);
   
    
//     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//   } catch (error) {
//     dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
//   }
// };

// export const registerUser = (userData) => async (dispatch) => {
//     console.log(userData);
    
//   try {
//     const res = await axios.post('http://localhost:3000/auth/signup', userData);
//     console.log(res.data);
//     dispatch({ type: 'REGISTER_SUCCESS', payload: userData });
//   } catch (error) {
//     dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
//   }
// };
