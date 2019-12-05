import { Reducer } from 'redux';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from './actionTypes';

export interface SearchState {
  users: User[];
}

const initialState: SearchState = {
  users: []
};

const searchReducer: Reducer<SearchState> = (
  state: SearchState = initialState,
  action: any
): SearchState => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      const users: User[] = action.users;

      if (users && users.length) {
        return {
          ...state,
          users: users
        };
      } else {
        return {
          ...state,
          users: []
        };
      }
    }

    default:
      return state;
  }
};

export default searchReducer;
