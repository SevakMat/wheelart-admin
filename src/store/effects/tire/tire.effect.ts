import { AppDispatch } from "../..";
import { NavigateFunction } from "react-router";
import { createTireService, deleteTireService, getAllTiresService, getTireByIdService, updateTireService } from "src/services/tire.service";
import { getTireAction, getTiresAction } from "src/store/actions/tire/tire";
import { TireType } from "src/store/types/tire/tire";

// Effect function to get all tires
export const getAllTiresEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getAllTiresService();
      const {
        data: { data: {
          tires
        } },
      } = result;

      dispatch(getTiresAction(tires));

      // Dispatch any action or store the tires data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to create a new tire
export const createTireEffect = (tireData: TireType): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // You can dispatch actions before making the API call if needed
      const result = await createTireService(tireData);
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to get a tire by ID
export const getTireByIdEffect = (tireId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getTireByIdService(tireId);
      const {
        data: { data: { tire } },
      } = result;

      dispatch(getTireAction(tire))
      // Dispatch any action or store the tire data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to update a tire by ID
export const updateTireEffect = (tireId: string, tireData: TireType,navigate: NavigateFunction): any => {
  return async (dispatch: AppDispatch) => {
    try {

      const result = await updateTireService(tireId, tireData);
      const {
        data: { data: { tire } },
      } = result;

      dispatch(getTireAction(tire))      
      navigate(`/admin/tires/${tire.id}`);

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to delete a tire by ID
export const deleteTireEffect = (tireId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteTireService(tireId);
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
