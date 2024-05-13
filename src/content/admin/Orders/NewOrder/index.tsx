import React, { useState } from "react";
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
} from "@mui/material";
import { useAppDispatch } from "src/store";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import PageTitle from "src/components/PageTitle";
import { OrderType } from "src/store/types/order/order";
import { createOrderEffect } from "src/store/effects/order/order.effect";

const NewOrder: React.FC = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<OrderType>({
    orderType: "",
    status: "",
    itemId: "",
    itemCount: "",
    createdDate: "",
  });

  const fieldTypes: { [key in keyof OrderType]: string } = {
    orderType: "text",
    status: "text",
    itemId: "number",
    itemCount: "text",
    createdDate: "text",
  };

  const [errors, setErrors] = useState<Partial<OrderType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: Partial<OrderType> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof OrderType]) {
        formErrors[key as keyof OrderType] = "This field is required";
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    dispatch(createOrderEffect(formData));
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
          docs="https://material-ui.com/components/text-fields/"
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
                    {Object.keys(formData).map(
                      (key: keyof OrderType, index: number) => (
                        <Grid item xs={12} sm={4} key={index}>
                          <TextField
                            id={key}
                            label={key}
                            value={formData[key]}
                            onChange={handleChange}
                            variant="filled"
                            required
                            error={!!errors[key]}
                            helperText={errors[key]}
                            type={fieldTypes[key]}
                          />
                        </Grid>
                      )
                    )}
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

export default NewOrder;
