import * as Actions from './actionTypes';

export const getUsersByName = (name: String) => ({
  type: Actions.GET_USERS,
  name
});

export const getUsersByNameSuccess = (users: User[]) => ({
  type: Actions.GET_USERS_SUCCESS,
  users
});

export const getUsersByNameError = (error: string) => ({
  type: Actions.GET_USERS_ERROR,
  error
});
