import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import OrdersPageHeader from './OrdersPageHeader';
import OrderConteiner from './OrdersContainer';

function Orders() {
  return (
    <>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <PageTitleWrapper>
        <OrdersPageHeader />
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
            <OrderConteiner />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Orders;
