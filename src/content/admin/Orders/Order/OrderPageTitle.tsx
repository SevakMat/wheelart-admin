import { FC } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface OrderPageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  orderId?: string;
}

const OrderPageTitle: FC<OrderPageTitleProps> = ({
  heading = "",
  subHeading = "",
  docs = "",
  orderId,
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
          type="button"
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/orders/${orderId}/edit`);
          }}
        >
          Edit Order
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderPageTitle;
