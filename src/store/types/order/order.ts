export enum OrderServerTypes {
  GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS',
  GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS',
  DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS'
}

export interface OrderType {
  id?: string;
  orderType: string;
  status: string;
  itemId: string;
  itemCount: string;
  userId?: string;
  createdDate?: string;
  name?: string;
  userName?: string;
}

export interface OrderState {
  orderList: OrderType[];
  order: OrderType | null;
}

export interface getOrdersActionType {
  type: OrderServerTypes.GET_ORDERS_SUCCESS;
  orderList: OrderType[];
}

export interface getOrderActionType {
  type: OrderServerTypes.GET_ORDER_SUCCESS;
  order: OrderType;
}
export interface deleteOrderActionType {
  type: OrderServerTypes.DELETE_ORDER_SUCCESS;
  id: string;
}
export type OrderActionTypes =
  | getOrdersActionType
  | getOrderActionType
  | deleteOrderActionType;
