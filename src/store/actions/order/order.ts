import {
  OrderServerTypes,
  OrderType,
  deleteOrderActionType,
  getOrderActionType,
  getOrdersActionType
} from 'src/store/types/order/order';

export const getOrdersAction = (
  orderList: OrderType[]
): getOrdersActionType => ({
  type: OrderServerTypes.GET_ORDERS_SUCCESS,
  orderList
});

export const getOrderAction = (order: OrderType): getOrderActionType => ({
  type: OrderServerTypes.GET_ORDER_SUCCESS,
  order
});

export const delelteOrderAction = (id: string): deleteOrderActionType => ({
  type: OrderServerTypes.DELETE_ORDER_SUCCESS,
  id
});
