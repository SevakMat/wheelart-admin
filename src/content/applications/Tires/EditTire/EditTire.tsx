import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Container,
  CardHeader,
  Divider
} from '@mui/material';
import { AppDispatch } from 'src/store';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';
import Footer from 'src/components/Footer';
import { TireType } from 'src/store/types/tire/tire';
import { updateTireEffect } from 'src/store/effects/tire/tire.effect';

type EditTireProps = {
  tire: TireType;
};

const EditTire: React.FC<EditTireProps> = ({ tire }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<TireType>(tire);

  const fieldTypes: { [key in keyof TireType]: string } = {
    tireWidth: 'number',
    tireAspectRatio: 'number',
    rimDiameter: 'number',
    marka: 'text',
    stock: 'number',
    imageUrl: 'text',
    price: 'number'
  };

  const [errors, setErrors] = useState<Partial<TireType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: Partial<TireType> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof TireType]) {
        formErrors[key as keyof TireType] = 'This field is required';
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    dispatch(updateTireEffect(tire.id, formData, navigate));
  };

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <PageTitleWrapper></PageTitleWrapper>
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
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
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
                    {Object.keys(formData).map((key: keyof TireType) => (
                      <Grid item xs={12} sm={4} key={key}>
                        <TextField
                          id={key}
                          label={key}
                          value={formData[key]}
                          onChange={handleChange}
                          variant="filled"
                          required
                          inputProps={{ readOnly: key === 'id' ? true : false }}
                          error={!!errors[key]}
                          helperText={errors[key]}
                          type={fieldTypes[key]}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: 2
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
      <Footer />
    </>
  );
};

export default EditTire;
