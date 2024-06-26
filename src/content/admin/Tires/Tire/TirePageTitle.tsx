import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Typography, Button, Grid } from "@mui/material";

interface TirePageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  tireId?: string;
}

const TirePageTitle: FC<TirePageTitleProps> = ({
  heading = "",
  subHeading = "",
  docs = "",
  tireId,
}) => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/tires/new`);
          }}
        >
          Add Tire
        </Button>
        <Button
          sx={{ mt: { xs: 2, md: 0 }, ml: 5 }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/tires/${tireId}/edit`);
          }}
        >
          Edit Tire
        </Button>
      </Grid>
    </Grid>
  );
};

export default TirePageTitle;
