export enum RimServerTypes {
  GET_RIMS_SUCCESS = "GET_RIMS_SUCCESS",
}

export interface RimType {
  id:string,
  sizeR: string,
  studHoles: string
  pcd: string
  centerBore: string,
  rimModel: string,
  width: string
  color: string,
  gram: string
  description: string,
  imageUrl: string,
  price: string
  score: string
}

export interface RimState {
  rimList: RimType[];
  rim: RimType | null;
}

export interface getRimsActionType {
  type: RimServerTypes.GET_RIMS_SUCCESS;
  rimList: RimType[];
}



export type RimActionTypes =
  | getRimsActionType
