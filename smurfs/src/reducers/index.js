/*
  Be sure to import in all of the action types from `../actions`
*/

import{
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
}
from "../actions";

const intialState = {
   smurfs: [],
   fetchingSmurfs: false,
   error: "",
 }

 function reducer(state = intialState, action) {
   console.log("reducer", action);
   switch (action.type) {
     case FETCH_SMURFS_START:
     return {
       ...state,
       error: "",
       fetchingSmurfs: true,
     };
     case FETCH_SMURFS_SUCCESS:
     return {
       ...state,
       smurfs: action.payload,
       error: "",
       fetchingSmurfs: false,
      };
      case FETCH_SMURFS_FAILURE:
      return{
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
      default:
      return state;
   }
 }

 export default reducer;
