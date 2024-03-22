import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';
import { RimType } from 'src/store/types/rim/rim';
import RimPageTitle from './RimPageTitle';

type RimProps = {
  rim: RimType | null
}

const RimContainer: React.FC<RimProps> = ({ rim }) => {

  return (
    <>
      <Helmet>
        <title>Rim Details</title>
      </Helmet>
      <PageTitleWrapper>
        <RimPageTitle
          heading="Rim Details"
          subHeading="View details of the selected rim"
          docs=""
          rimId={rim?.id}
        />
      </PageTitleWrapper>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={rim?.imageUrl || 'placeholder.jpg'} // Provide a placeholder image if imageUrl is not available
                alt="Rim Image"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {rim?.rimModel || 'Rim Model'}
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Size:</strong> {rim?.sizeR || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Stud Holes:</strong> {rim?.studHoles || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>PCD:</strong> {rim?.pcd || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Width:</strong> {rim?.width || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Color:</strong> {rim?.color || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Description:</strong> {rim?.description || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Price:</strong> {rim?.price || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Score:</strong> {rim?.score || '-'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default RimContainer;
