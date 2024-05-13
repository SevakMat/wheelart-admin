import { useNavigate, useParams } from "react-router-dom";

import EditRim from "./EditRim";
import { useEffect, useState } from "react";
import { getRimByIdEffect } from "src/store/effects/rim/rim.effect";
import { useToasts } from "react-toast-notifications";

const EditRimConteiner = () => {
  const [rim, setRim] = useState(null);
  const { id } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();

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

  if (!rim) return <div>Rim not exist</div>;

  return <EditRim rim={rim} />;
};
export default EditRimConteiner;
