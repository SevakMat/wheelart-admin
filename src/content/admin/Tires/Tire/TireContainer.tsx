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
import TirePageTitle from './TirePageTitle';
import { TireType } from 'src/store/types/tire/tire';
import Slideshow from 'src/components/public/Slideshow';

type TireProps = {
  tire: TireType;
};

const TireContainer: React.FC<TireProps> = ({ tire }) => {
  const images = tire?.imageUrl
    .split(';')
    .filter((item: any) => item !== 'undefined');

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
            <Slideshow images={images} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {tire?.marka || 'Trie Marka'}
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>ID:</strong> {tire?.id || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong> Marka:</strong> {tire?.marka || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong> Diameter:</strong> {tire?.rimDiameter || 0}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong> Stock:</strong> {tire?.stock || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong> Aspect Ratio:</strong> {tire?.tireAspectRatio || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong> Width:</strong> {tire?.tireWidth || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Price:</strong> {tire?.price || '-'}$
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TireContainer;
