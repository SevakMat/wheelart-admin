export enum TireServerTypes {
  GET_TIRES_SUCCESS = 'GET_TIRES_SUCCESS',
  GET_TIRE_SUCCESS = 'GET_TIRE_SUCCESS'
}

export interface TireType {
  id?: string;
  tireWidth?: string;
  tireAspectRatio?: string;
  rimDiameter?: string;
  marka?: string;
  stock?: string;
  price?: string;
  imageUrl?: string;
}

export interface TireState {
  tireList: TireType[];
  tire: TireType | null;
}

export interface getTiresActionType {
  type: TireServerTypes.GET_TIRES_SUCCESS;
  tireList: TireType[];
}

export interface getTireActionType {
  type: TireServerTypes.GET_TIRE_SUCCESS;
  tire: TireType;
}

export type TireActionTypes = getTiresActionType | getTireActionType;
