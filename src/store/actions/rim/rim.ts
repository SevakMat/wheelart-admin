import {
  RimServerTypes,
  RimType,
  getRimsActionType,
} from "../../types/rim/rim";

export const getRimsAction = (
  rimList: RimType[]
): getRimsActionType => ({
  type: RimServerTypes.GET_RIMS_SUCCESS,
  rimList,
});
