import { Reducer } from "redux";
import {
  OrderActionTypes,
  OrderServerTypes,
  OrderState,
} from "src/store/types/order/order";
import { OrderType } from "../../types/order/order";

const initialState: OrderState = {
  orderList: [],
  order: null,
};

type ReducerType = Reducer<OrderState, OrderActionTypes>;

const reducer: ReducerType = (state, action: OrderActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case OrderServerTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orderList: action.orderList,
      };

    case OrderServerTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order,
      };

    case OrderServerTypes.DELETE_ORDER_SUCCESS:
      const updatedOrderList = state.orderList.filter(
        (order: OrderType) => order.id !== action.id
      );
      return {
        ...state,
        orderList: updatedOrderList,
      };

    default:
      return state;
  }
};

export default reducer;
