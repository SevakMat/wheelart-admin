import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import TireConteiner from './TireContainer';
import TiresPageHeader from './TiresPageHeader';

function Tires() {
  return (
    <>
      <Helmet>
        <title>Tires</title>
      </Helmet>
      <PageTitleWrapper>
        <TiresPageHeader />
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
            <TireConteiner />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Tires;
