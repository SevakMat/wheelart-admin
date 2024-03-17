import {
  RimServerTypes,
  RimType,
  getRimActionType,
  getRimsActionType,
} from "../../types/rim/rim";

export const getRimsAction = (
  rimList: RimType[]
): getRimsActionType => ({
  type: RimServerTypes.GET_RIMS_SUCCESS,
  rimList,
});

export const getRimAction = (rim: RimType): getRimActionType => ({
  type: RimServerTypes.GET_RIM_SUCCESS,
  rim
});
