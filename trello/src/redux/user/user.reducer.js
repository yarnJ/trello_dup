import UserActionType from "./user.type";
import { creatUserProfileDocument } from "../../utilis/firebase.utilis";

const INITIAL_STATE = {
  currentUser: null,
  emailUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionType.GOOGLE_USER:
      return {
        currentUser: action.payload
      }

    case UserActionType.EMAIL_SIGNUP:
      return {
        emailUser: creatUserProfileDocument(action.payload)
      }

    default:
      return state;
  }
};

export default userReducer;