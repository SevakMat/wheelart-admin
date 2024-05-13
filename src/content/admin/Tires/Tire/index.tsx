import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getTireByIdEffect } from "src/store/effects/tire/tire.effect";
import TireContainer from "./TireContainer";

const Tire = () => {
  const [tire, setTire] = useState(null);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const { id } = useParams();

  const getTire = async () => {
    try {
      const tire = await getTireByIdEffect(id);
      setTire(tire);
    } catch (error) {
      addToast("Tire not found", { appearance: "error" });
      navigate("/admin/tires");
    }
  };

  useEffect(() => {
    getTire();
  }, [id]);

  if (!tire) return <div>Tire not exist</div>;
  return <TireContainer tire={tire} />;
};

export default Tire;
