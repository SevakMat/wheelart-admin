import { useEffect } from 'react';
import { Card } from '@mui/material';
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

  return (
    <Card>
      <RecentOrdersTable tires={tireList} />
    </Card>
  );
}

export default TireConteiner;
