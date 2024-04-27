import { AppDispatch } from '../..';
import { NavigateFunction } from 'react-router';
import {
  createOrderService,
  deleteOrderService,
  getAllOrdersService,
  getOrderByIdService,
  updateOrderService
} from 'src/services/order.service';
import { getOrderAction, getOrdersAction } from 'src/store/actions/order/order';
import { OrderType } from 'src/store/types/order/order';

// Effect function to get all orders
export const getAllOrdersEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getAllOrdersService();
      const {
        data: {
          data: { orders }
        }
      } = result;

      dispatch(getOrdersAction(orders));

      // Dispatch any action or store the orders data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to create a new order
export const createOrderEffect = (orderData: OrderType): any => {
  return async (dispatch: AppDispatch) => {
    try {
      // You can dispatch actions before making the API call if needed
      const result = await createOrderService(orderData);
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to get a order by ID
export const getOrderByIdEffect = (orderId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getOrderByIdService(orderId);
      const {
        data: {
          data: { order }
        }
      } = result;

      dispatch(getOrderAction(order));
      // Dispatch any action or store the order data as needed
    } catch (error: any) {
      console.log(error);
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to update a order by ID
export const updateOrderEffect = (
  orderId: string,
  orderData: OrderType,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      console.log(444, orderData);

      const result = await updateOrderService(orderId, orderData);
      const {
        data: {
          data: { order }
        }
      } = result;

      dispatch(getOrderAction(order));
      navigate(`/admin/orders/${order.id}`);

      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};

// Effect function to delete a order by ID
export const deleteOrderEffect = (orderId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteOrderService(orderId);
      // Handle success response as needed
    } catch (error: any) {
      console.log(error);
      // Handle error response as needed
    } finally {
      // Any cleanup code if needed
    }
  };
};
