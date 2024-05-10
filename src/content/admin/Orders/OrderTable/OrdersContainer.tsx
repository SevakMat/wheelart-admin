import { useEffect } from 'react';
import { Card } from '@mui/material';
import RecentOrdersTable from './OrdersTable';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { getAllOrdersEffect } from 'src/store/effects/order/order.effect';

function OrderConteiner() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersEffect());
  }, []);

  const { orderList } = useAppSelector((state: RootState) => state.order);

  return (
    <Card>
      <RecentOrdersTable orders={orderList} />
    </Card>
  );
}

export default OrderConteiner;
