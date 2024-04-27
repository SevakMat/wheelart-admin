import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';
import TirePageTitle from './TirePageTitle';
import { TireType } from 'src/store/types/tire/tire';

type TireProps = {
  tire: TireType;
};

const TireContainer: React.FC<TireProps> = ({ tire }) => {
  return (
    <>
      <Helmet>
        <title>TIre Details</title>
      </Helmet>
      <PageTitleWrapper>
        <TirePageTitle
          heading="Trie Details"
          subHeading="View details of the selected tire"
          docs=""
          tireId={tire?.id}
        />
      </PageTitleWrapper>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={tire?.imageUrl || 'placeholder.jpg'} // Provide a placeholder image if imageUrl is not available
                alt="Tire Image"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {tire?.marka || 'Trie Marka'}
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Tire Marka:</strong> {tire?.marka || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Rim Diameter:</strong> {tire?.rimDiameter || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>TIre Stock:</strong> {tire?.stock || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Tire Aspect Ratio:</strong>{' '}
                  {tire?.tireAspectRatio || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Tire Width:</strong> {tire?.tireWidth || '-'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default TireContainer;
