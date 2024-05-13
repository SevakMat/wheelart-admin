import { AppDispatch, RootState, useAppSelector } from "src/store";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderByIdEffect } from "src/store/effects/order/order.effect";
import EditOrder from "./EditOrder";

const EditOrderConteiner = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getOrderByIdEffect(id));
  }, [id]);

  const { order } = useAppSelector((state: RootState) => state.order);
  if (!order) return <div>order not found</div>;
  return <EditOrder order={order} />;
};
export default EditOrderConteiner;
