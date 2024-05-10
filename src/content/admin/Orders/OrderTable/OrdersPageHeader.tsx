import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function OrdersPageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Orders
        </Typography>
      </Grid>
      {/* <Grid item>
        <Button
          href={'/admin/orders/new'}
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create order
        </Button>
      </Grid> */}
    </Grid>
  );
}

export default OrdersPageHeader;
