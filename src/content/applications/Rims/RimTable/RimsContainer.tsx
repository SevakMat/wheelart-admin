import { useEffect } from 'react';
import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RimsTable';
import { subDays } from 'date-fns';
import { useDispatch } from 'react-redux';
// import { getRimsEffect } from 'src/store/effects/rim/rim.effect';
import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { getAllRimsEffect } from 'src/store/effects/rim/rim.effect';

function RimConteiner() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRimsEffect());
  }, []);

  const { rimList } = useAppSelector((state: RootState) => state.rim);

  return (
    <Card>
      <RecentOrdersTable rims={rimList} />
    </Card>
  );
}

export default RimConteiner;
