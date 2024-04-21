import { Reducer } from 'redux';
import {
  OrderActionTypes,
  OrderServerTypes,
  OrderState
} from 'src/store/types/order/order';

const initialState: OrderState = {
  orderList: [],
  order: null
};

type ReducerType = Reducer<OrderState, OrderActionTypes>;

const reducer: ReducerType = (state, action: OrderActionTypes) => {
  state = state || initialState;

  switch (action.type) {
    case OrderServerTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orderList: action.orderList
      };

    case OrderServerTypes.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order
      };

    default:
      return state;
  }
};

export default reducer;
