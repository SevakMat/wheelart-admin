import { Reducer } from 'redux';
import { RimActionTypes, RimServerTypes, RimState } from '../../types/rim/rim';

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
        rimList: action.rimList
      };

    case RimServerTypes.GET_RIM_SUCCESS:
      return {
        ...state,
        rim: action.rim
      };

    case RimServerTypes.DELETE_RIM_SUCCESS:
      const updatedRimList = state.rimList.filter(
        (rim) => rim.id !== action.id
      );
      return {
        ...state,
        rimList: updatedRimList
      };

    default:
      return state;
  }
};

export default reducer;
