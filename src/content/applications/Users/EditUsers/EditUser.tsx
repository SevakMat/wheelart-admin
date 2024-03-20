import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, TextField, Button, Grid, Container, CardHeader, Divider } from '@mui/material';
import { AppDispatch } from 'src/store';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';
import Footer from 'src/components/Footer';
import { UserType } from 'src/store/types/user/user';
import { updateUserEffect } from 'src/store/effects/user/user.effect';

type EditUserProps = {
  user: UserType
}

const EditUser: React.FC<EditUserProps> = ({user}) => {
  
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<UserType>(user);

  const fieldTypes: { [key in keyof UserType]: string } = {
    firstName:'text',
    lastName:'text',
    phoneNumber:'text',
    email:'text',
    password:'text',
    role:'text'
  };


  const [errors, setErrors] = useState<Partial<UserType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: Partial<UserType> = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key as keyof UserType]) {
        formErrors[key as keyof UserType] = 'This field is required';
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    dispatch(updateUserEffect(user.id, formData,navigate));
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
                    {Object.keys(formData).map((key: keyof UserType) => (
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
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                  <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>
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

export default EditUser;
