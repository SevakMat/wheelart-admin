import { Reducer } from "redux";
import { UserActionTypes, UserServerTypes, UserState } from "src/store/types/user/user";

const initialState: UserState = {
  userList: [],
  user: null
};

type ReducerType = Reducer<UserState, UserActionTypes>;

const reducer: ReducerType = (state, action: UserActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case UserServerTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action.userList,
      };

    case UserServerTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
