import { AppDispatch, RootState, useAppSelector } from 'src/store';
import RimContainer from './RimContainer';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRimByIdEffect } from 'src/store/effects/rim/rim.effect';

const Rim = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRimByIdEffect(id));
  }, []);

  const { rim } = useAppSelector((state: RootState) => state.rim);
  console.log(rim);

  return (
    <>
      <RimContainer rim={rim} />
    </>
  );
};

export default Rim;
