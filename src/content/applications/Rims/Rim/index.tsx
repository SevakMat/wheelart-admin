import { AppDispatch, RootState, useAppSelector } from 'src/store';
import RimContainer from './RimContainer';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRimByIdEffect } from 'src/store/effects/rim/rim.effect';
import useQuery from 'src/hooks/useQuery';
import { getRimByIdService } from 'src/services/rim.service';

const Rim = () => {
  const dispatch: AppDispatch = useDispatch();
  // const { id } = useParams();
  const [id, setId] = useState<string>('889');
  const { data } = useQuery(getRimByIdService, id);

  console.log({ id });

  useEffect(() => {
    if (data) {
      console.log({ data });
    }
  }, []);

  const { rim } = useAppSelector((state: RootState) => state.rim);

  return (
    <>
      <button
        onClick={() => {
          setId((prevState) => (prevState === '889' ? '890' : '889'));
        }}
      >
        click
      </button>
      <RimContainer rim={rim} />
    </>
  );
};

export default Rim;
