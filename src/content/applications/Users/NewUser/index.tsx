import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from '../UserPageHeader';
import NewUserContainer from './NewUserContainer';


function NewUser() {
  return (
    <>
      <Helmet>
        <title>New User</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <NewUserContainer />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default NewUser;
