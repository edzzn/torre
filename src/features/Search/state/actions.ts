import * as Actions from './actionTypes';

export const getUsersByName = (
  name: String,
  offset?: number,
  limit?: number
) => ({
  type: Actions.GET_USERS,
  name,
  offset,
  limit
});

export const getUsersByNameSuccess = (users: User[], hasOffset: boolean) => ({
  type: Actions.GET_USERS_SUCCESS,
  users,
  hasOffset
});

export const getUsersByNameError = (error: string) => ({
  type: Actions.GET_USERS_ERROR,
  error
});
