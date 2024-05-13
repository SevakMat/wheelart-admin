import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { RimType } from "src/store/types/rim/rim";
import RimPageTitle from "./RimPageTitle";
import Slideshow from "src/components/public/Slideshow";

type RimProps = {
  rim: RimType | null;
};

const RimContainer: React.FC<RimProps> = ({ rim }) => {
  let images: string[] = [""];
  if (rim?.imageUrl) {
    images = rim?.imageUrl
      .split(";")
      .filter((item: any) => item !== "undefined");
  }

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
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Slideshow images={images} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {rim?.rimModel || "Rim Model"}
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>ID:</strong> {rim?.id || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Size:</strong> {rim?.sizeR || "-"} R
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Stud Holes:</strong> {rim?.studHoles || "-"}x
                  {rim?.pcd || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>centerBore:</strong> {rim?.centerBore || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Width:</strong> {rim?.width || "-"}J
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Color:</strong> {rim?.color || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Description:</strong> {rim?.description || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Price:</strong> {rim?.price || "-"}$
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Stock:</strong> {rim?.stock || 0}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Gram:</strong> {rim?.gram || "-"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RimContainer;
