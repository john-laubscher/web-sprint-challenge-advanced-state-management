import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, MODIFY_ERR_MSG } from "../actions";

export const initialState = {
  smurfs: [
    {
      id: "",
      name: "",
      position: "",
      nickname: "",
      description: "",
    },
  ],
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      console.log("fetchSuccess", action.payload);
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        //   {
        //     id: action.payload[0].id,
        //     name: action.payload[0].name,
        //     position: action.payload[0].position,
        //     nickname: action.payload[0].nickname,
        //     description: action.payload[0].description,
        //   },
        //   {
        //     id: action.payload[1].id,
        //     name: action.payload[1].name,
        //     position: action.payload[1].position,
        //     nickname: action.payload[1].nickname,
        //     description: action.payload[1].description,
        //   },
        // ],
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          action.payload,
          //   {
          //     id: action.payload.id,
          //     name: action.payload.name,
          //     position: action.payload.position,
          //     nickname: action.payload.nickname,
          //     description: action.payload.description,
          //   },
        ],
      };
    case MODIFY_ERR_MSG:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
