import {
  getAllRimsService,
  createRimService,
  getRimByIdService,
  updateRimService,
  deleteRimService,
} from "../../../services/rim.service"; // Replace "path/to/rim.service" with the correct path

import { AppDispatch } from "../..";
import {
  delelteRimAction,
  getRimAction,
  getRimsAction,
} from "src/store/actions/rim/rim";
import { RimType } from "src/store/types/rim/rim";
import { NavigateFunction } from "react-router";

// Effect function to get all rims
export const getAllRimsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getAllRimsService();
      const {
        data: {
          data: { rims },
        },
      } = result;

      dispatch(getRimsAction(rims));

      // Dispatch any action or store the rims data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to create a new rim
export const createRimEffect = (rimData: RimType, navigate): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // You can dispatch actions before making the API call if needed
      const response = await createRimService(rimData);

      const {
        data: {
          data: { rim },
        },
      } = response;

      navigate(`/admin/rims/${rim.id}`);
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to get a rim by ID
export const getRimByIdEffect = async (rimId: string): Promise<any> => {
  try {
    const rim = await getRimByIdService(rimId);
    return rim;
    // Dispatch any action or store the rim data as needed
  } catch (error: any) {
    console.log(error);
  } finally {
    // Any cleanup code if needed
  }
};

// Effect function to update a rim by ID
export const updateRimEffect = (
  rimId: string,
  rimData: RimType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await updateRimService(rimId, rimData);
      const {
        data: {
          data: { rim },
        },
      } = result;

      dispatch(getRimAction(rim));
      navigate(`/admin/rims/${rim.id}`);

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to delete a rim by ID
export const deleteRimEffect = (rimId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteRimService(rimId);
      dispatch(delelteRimAction(rimId));

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);

      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
