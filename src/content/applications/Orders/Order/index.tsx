import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOrderByIdEffect } from 'src/store/effects/order/order.effect';
import OrderContainer from './OrderContainer';

const Order = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderByIdEffect(id));
  }, []);

  const { order } = useAppSelector((state: RootState) => state.order);

  return <OrderContainer order={order} />;
};

export default Order;
