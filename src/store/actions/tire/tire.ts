import { TireServerTypes, TireType, getTireActionType, getTiresActionType } from "src/store/types/tire/tire";

  export const getTiresAction = (
    tireList: TireType[]
  ): getTiresActionType => ({
    type: TireServerTypes.GET_TIRES_SUCCESS,
    tireList,
  });
  
  export const getTireAction = (tire: TireType): getTireActionType => ({
    type: TireServerTypes.GET_TIRE_SUCCESS,
    tire
  });
  