import { useEffect } from 'react';
import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './TiresTable';
import { subDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { getAllTiresEffect } from 'src/store/effects/tire/tire.effect';

function TireConteiner() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTiresEffect());
  }, []);

  const { tireList } = useAppSelector((state: RootState) => state.tire);
  if (tireList) console.log(tireList.length);

  return (
    <Card>
      <RecentOrdersTable tires={tireList} />
    </Card>
  );
}

export default TireConteiner;
