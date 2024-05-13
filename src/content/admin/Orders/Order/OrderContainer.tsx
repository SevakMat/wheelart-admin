import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { OrderType } from "src/store/types/order/order";
import OrderPageTitle from "./OrderPageTitle";
import { DateFormatter } from "src/helpers/DateFormatter";

type OrderProps = {
  order: OrderType | null;
};

const OrderContainer: React.FC<OrderProps> = ({ order }) => {
  return (
    <>
      <Helmet>
        <title>Order Details</title>
      </Helmet>
      <PageTitleWrapper>
        <OrderPageTitle
          heading="Order Details"
          subHeading="View details of the selected order"
          docs=""
          orderId={order?.id}
        />
      </PageTitleWrapper>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", py: 4 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={rim?.imageUrl || 'placeholder.jpg'} // Provide a placeholder image if imageUrl is not available
                alt="Rim Image"
              />
            </Card>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Item Count:</strong> {order?.itemCount || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Order ItemId:</strong> {order?.itemId || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Order Type:</strong> {order?.orderType || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Order Status:</strong> {order?.status || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Date:</strong>
                  {(order?.createdDate && DateFormatter(order?.createdDate)) ||
                    "-"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OrderContainer;
