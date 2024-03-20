import { AppDispatch, RootState, useAppSelector } from "src/store";
import UserContainer from "./UserContainer"
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserByIdEffect } from "src/store/effects/user/user.effect";

const User = () => {

  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserByIdEffect(id))
  }, [])

  const { user } = useAppSelector((state: RootState) => state.user);

  return (
    <UserContainer user={user} />
  )
}

export default User