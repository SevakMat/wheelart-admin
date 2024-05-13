import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Container,
  CardHeader,
  Divider,
  MenuItem,
} from "@mui/material";
import { AppDispatch } from "src/store";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import PageTitle from "src/components/PageTitle";
import { OrderType } from "src/store/types/order/order";
import { updateOrderEffect } from "src/store/effects/order/order.effect";
import OrderTypeSelection from "src/components/public/OrderTypeSelection/OrderTypeSelection";

type EditOrderProps = {
  order: OrderType;
};

const EditOrder: React.FC<EditOrderProps> = ({ order }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<OrderType>(order);

  const fieldTypes: { [key in keyof OrderType]: string } = {
    orderType: "text",
    status: "text",
    itemId: "number",
    itemCount: "number",
  };

  const [errors, setErrors] = useState<Partial<OrderType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: any = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof OrderType]) {
        formErrors[key as keyof OrderType] = "This field is required";
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    if (order.id) dispatch(updateOrderEffect(order.id, formData, navigate));
  };

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Forms"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={10}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                  >
                    <Grid item xs={12} sm={4} key={"id"}>
                      <OrderTypeSelection
                        handleChange={handleChange}
                        value={formData["status"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} key={"id"}>
                      <TextField
                        id={"id"}
                        label={"Order id"}
                        value={formData["id"]}
                        onChange={handleChange}
                        variant="filled"
                        required
                        inputProps={{ readOnly: true }}
                        error={!!errors["id"]}
                        helperText={errors["id"]}
                        type={fieldTypes["id"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} key={"orderType"}>
                      <TextField
                        id={"orderType"}
                        label={"orderType"}
                        value={formData["orderType"]}
                        onChange={handleChange}
                        variant="filled"
                        required
                        inputProps={{ readOnly: true }}
                        error={!!errors["orderType"]}
                        helperText={errors["orderType"]}
                        type={fieldTypes["orderType"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} key={"itemId"}>
                      <TextField
                        id={"itemId"}
                        label={"itemId"}
                        value={formData["itemId"]}
                        onChange={handleChange}
                        variant="filled"
                        required
                        inputProps={{ readOnly: true }}
                        error={!!errors["itemId"]}
                        helperText={errors["itemId"]}
                        type={fieldTypes["itemId"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} key={"itemCount"}>
                      <TextField
                        id={"itemCount"}
                        label={"itemCount"}
                        value={formData["itemCount"]}
                        onChange={handleChange}
                        variant="filled"
                        required
                        error={!!errors["itemCount"]}
                        helperText={errors["itemCount"]}
                        type={fieldTypes["itemCount"]}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 2,
                  }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditOrder;
