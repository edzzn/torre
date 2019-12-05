import * as Actions from './actionTypes';

export const getUsersByName = (name: String, limit?: number) => ({
  type: Actions.GET_USERS,
  name,
  limit
});

export const getUsersByNameSuccess = (users: User[]) => ({
  type: Actions.GET_USERS_SUCCESS,
  users
});

export const getUsersByNameError = (error: string) => ({
  type: Actions.GET_USERS_ERROR,
  error
});
