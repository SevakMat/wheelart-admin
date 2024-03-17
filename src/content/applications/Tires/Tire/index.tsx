import { AppDispatch, RootState, useAppSelector } from "src/store";
import TireContainer from "./TireContainer"
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getTireByIdEffect } from "src/store/effects/tire/tire.effect";

const Tire = () => {

  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTireByIdEffect(id))
  }, [])

  const { tire } = useAppSelector((state: RootState) => state.tire);

  return (
    <TireContainer tire={tire} />
  )
}

export default Tire