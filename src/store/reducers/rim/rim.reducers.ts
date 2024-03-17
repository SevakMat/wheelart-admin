import { Reducer } from "redux";
import { RimActionTypes, RimServerTypes, RimState } from "../../types/rim/rim";

const initialState: RimState = {
  rimList: [],
  rim: null
};

type ReducerType = Reducer<RimState, RimActionTypes>;

const reducer: ReducerType = (state, action: RimActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case RimServerTypes.GET_RIMS_SUCCESS:
      return {
        ...state,
        rimList: action.rimList,
      };

    case RimServerTypes.GET_RIM_SUCCESS:
      return {
        ...state,
        rim: action.rim,
      };

    default:
      return state;
  }
};

export default reducer;
