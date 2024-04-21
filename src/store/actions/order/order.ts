import {
  OrderServerTypes,
  OrderType,
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
