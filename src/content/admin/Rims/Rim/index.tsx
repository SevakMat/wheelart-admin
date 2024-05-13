import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import RimContainer from "./RimContainer";
import { getRimByIdEffect } from "src/store/effects/rim/rim.effect";

const Rim = () => {
  const [rim, setRim] = useState(null);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const { id } = useParams();

  const getRim = async (id: string) => {
    try {
      const rim = await getRimByIdEffect(id);
      setRim(rim);
    } catch (error) {
      addToast("Rim not found", { appearance: "error" });
      navigate("/admin/rims");
    }
  };

  useEffect(() => {
    if (id) getRim(id);
  }, [id]);

  if (!rim) return <div>rim not exist</div>;
  return <RimContainer rim={rim} />;
};

export default Rim;
