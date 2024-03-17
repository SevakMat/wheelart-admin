import { AppDispatch, RootState, useAppSelector } from "src/store";
import { useParams } from "react-router-dom";


import EditRim from "./EditRim"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRimByIdEffect } from "src/store/effects/rim/rim.effect";

const EditRimConteiner = () => {

  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRimByIdEffect(id))
  }, [])

  const { rim } = useAppSelector((state: RootState) => state.rim);


  return (
    <EditRim rim={rim} />
  )
}
export default EditRimConteiner