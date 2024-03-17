import { Reducer } from "redux";
import { RimActionTypes, RimServerTypes, RimState } from "../../types/rim/rim";

const initialState: RimState = {
  rimList: [],
  rim:null
};

type ReducerType = Reducer<RimState, RimActionTypes>;

const reducer: ReducerType = (state = initialState, action: RimActionTypes) => {
  switch (action.type) {
    case RimServerTypes.GET_RIMS_SUCCESS:
      return {
        ...state,
        rimList: action.rimList,
      };
    // case RimServerTypes.GET_RIM_SUCCESS:
    //   return {
    //     ...state,
    //     rim: action.rim,
    //   };

    // case RimServerTypes.GET_RIMS_COUNT_SUCCESS:
    //   return {
    //     ...state,
    //     rimsCount: action.rimsCount,
    //   };
    // case RimServerTypes.GET_POPULAR_RIMS_SUCCESS:
    //   return {
    //     ...state,
    //     popularRims: action.popularRims,
    //   };
    // case RimServerTypes.GET_RECOMMENDED_RIMS_SUCCESS:
    //   return {
    //     ...state,
    //     recommendedRims: action.recommendedRims
    //   };

    default:
      return state;
  }
};

export default reducer;
