import { getAllRimsService, createRimService, getRimByIdService, updateRimService, deleteRimService } from "../../../services/rim.service"; // Replace "path/to/rim.service" with the correct path

import { AppDispatch } from "../..";
import { getRimsAction } from "src/store/actions/rim/rim";

// Effect function to get all rims
export const getAllRimsEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getAllRimsService();
      const {
        data: { data:{
          rims
        } },
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
export const createRimEffect = (rimData: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // You can dispatch actions before making the API call if needed
      const result = await createRimService(rimData);
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to get a rim by ID
export const getRimByIdEffect = (rimId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getRimByIdService(rimId);
      const {
        data: { rim },
      } = result;
      // Dispatch any action or store the rim data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to update a rim by ID
export const updateRimEffect = (rimId: string, rimData: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await updateRimService(rimId, rimData);
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
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
