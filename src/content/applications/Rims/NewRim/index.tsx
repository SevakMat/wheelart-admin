import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from '../RimsPageHeader';
import NewUserContainer from './NewRimContainer';


function NewUser() {
  return (
    <>
      <Helmet>
        <title>New Rim</title>
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
