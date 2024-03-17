import { Reducer } from "redux";
import { TireActionTypes, TireServerTypes, TireState } from "src/store/types/tire/tire";

const initialState: TireState = {
  tireList: [],
  tire: null
};

type ReducerType = Reducer<TireState, TireActionTypes>;

const reducer: ReducerType = (state, action: TireActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case TireServerTypes.GET_TIRES_SUCCESS:
      return {
        ...state,
        tireList: action.tireList,
      };

    case TireServerTypes.GET_TIRE_SUCCESS:
      return {
        ...state,
        tire: action.tire,
      };

    default:
      return state;
  }
};

export default reducer;
