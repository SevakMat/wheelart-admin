import { Helmet } from 'react-helmet-async';
import RimsPageHeader from './RimsPageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import RimConteiner from './RimsContainer';

function Rims() {
  return (
    <>
      <Helmet>
        <title>Rims</title>
      </Helmet>
      <PageTitleWrapper>
        <RimsPageHeader />
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
            <RimConteiner />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Rims;
