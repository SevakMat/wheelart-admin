import { useEffect } from 'react';
import { Card } from '@mui/material';
import RecentOrdersTable from './RimsTable';
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

  return <Card>{rimList && <RecentOrdersTable rims={rimList} />} </Card>;
}

export default RimConteiner;
