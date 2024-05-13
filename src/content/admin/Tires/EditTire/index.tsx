import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getTireByIdEffect } from "src/store/effects/tire/tire.effect";
import EditTire from "./EditTire";

const EditTireConteiner = () => {
  const [tire, setTire] = useState(null);
  const { id } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const getTire = async (id: string) => {
    try {
      const tire = await getTireByIdEffect(id);
      setTire(tire);
    } catch (error) {
      addToast("Tire not found", { appearance: "error" });
      navigate("/admin/Tires");
    }
  };

  useEffect(() => {
    if (id) getTire(id);
  }, [id]);

  if (!tire) return <div>Tire not exist</div>;

  return <EditTire tire={tire} />;
};
export default EditTireConteiner;
