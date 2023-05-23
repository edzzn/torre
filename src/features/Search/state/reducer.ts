import { Reducer } from 'redux';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from './actionTypes';

export interface SearchState {
  users: User[];
  isSearching: boolean;
}

const initialState: SearchState = {
  users: [],
  isSearching: false
};

const searchReducer: Reducer<SearchState> = (
  state: SearchState = initialState,
  action: any
): SearchState => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        isSearching: true
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        isSearching: false
      };
    }
    case GET_USERS_SUCCESS: {
      let users: User[] = action.users;
      const hasOffset: User[] = action.hasOffset;
      debugger;
      if (users && users.length) {
        if (hasOffset) {
          users = users.concat(state.users);
        }
        return {
          ...state,
          users: users,
          isSearching: false
        };
      } else {
        return {
          ...state,
          users: [],
          isSearching: false
        };
      }
    }

    default:
      return state;
  }
};

export default searchReducer;
