import { AppDispatch, RootState, useAppSelector } from "src/store";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserByIdEffect } from "src/store/effects/user/user.effect";
import EditUser from "./EditUser";

const EditUserConteiner = () => {

  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserByIdEffect(id))
  }, [])

  const { user } = useAppSelector((state: RootState) => state.user);


  return (
    <EditUser user={user} />
  )
}
export default EditUserConteiner