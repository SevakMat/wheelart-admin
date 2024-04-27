import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTireByIdEffect } from 'src/store/effects/tire/tire.effect';
import EditTire from './EditTire';

const EditTireConteiner = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTireByIdEffect(id));
  }, []);

  const { tire } = useAppSelector((state) => state.tire);

  return <EditTire tire={tire} />;
};
export default EditTireConteiner;
