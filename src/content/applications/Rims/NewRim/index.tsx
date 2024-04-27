import React, { useState } from 'react';
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
import { RimType } from 'src/store/types/rim/rim';
import { createRimEffect } from 'src/store/effects/rim/rim.effect';
import { AppDispatch } from 'src/store';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';
import Footer from 'src/components/Footer';
import { useNavigate } from 'react-router';

const NewRim: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RimType>({
    sizeR: '',
    studHoles: '',
    pcd: '',
    centerBore: '',
    rimModel: '',
    width: '',
    color: '',
    gram: '',
    description: '',
    imageUrl: '',
    price: '',
    score: ''
  });

  const fieldTypes: { [key in keyof RimType]: string } = {
    sizeR: 'number',
    studHoles: 'number',
    pcd: 'number',
    centerBore: 'text', //vtangavor
    rimModel: 'text',
    width: 'number',
    color: 'text',
    gram: 'number',
    description: 'text',
    imageUrl: 'text',
    price: 'number',
    score: 'number'
  };

  const [errors, setErrors] = useState<Partial<RimType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: Partial<RimType> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof RimType]) {
        formErrors[key as keyof RimType] = 'This field is required';
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    dispatch(createRimEffect(formData, navigate));
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
                    {Object.keys(formData).map((key: keyof RimType) => (
                      <Grid item xs={12} sm={4} key={key}>
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
                    // disabled={true}
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

export default NewRim;
