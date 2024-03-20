import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import UsersPageHeader from './UsersPageHeader';
import UserConteiner from './UsersContainer';

function Users() {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <PageTitleWrapper>
        <UsersPageHeader />
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
            <UserConteiner />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Users;
