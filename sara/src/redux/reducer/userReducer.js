// // reducers/authReducer.js
// const initialState = {
//     user: null,
//     isAuthenticated: false,
//     loading: true,
//     error: null,
//   };
  
//   const authReducer = (state = initialState, action) => {
//     console.log(action.payload);
    
//     switch (action.type) {
//       case 'LOGIN_SUCCESS':
//       case 'REGISTER_SUCCESS':
//         return {
//           ...state,
//           user: action.payload,
//           isAuthenticated: true,
//           loading: false,
//         };
        
//       case 'LOGIN_FAIL':
//       case 'REGISTER_FAIL':
//         return {
//           ...state,
//           error: action.payload,
//           loading: false,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
  