import UserActionType from "./user.type";

export const setCurrentUser = user => ({
  type: UserActionType.GOOGLE_USER,
  payload: user
});

export const emailSignup = user => ({
  type: UserActionType.EMAIL_SIGNUP,
  payload: user
});