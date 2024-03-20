import { Avatar, Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';
import { UserType } from 'src/store/types/user/user';
import UserPageTitle from './UserPageTitle';

type UserProps = {
  user: UserType
}

const UserContainer: React.FC<UserProps> = ({ user }) => {

  return (
    <>
      <Helmet>
        <title>User Details</title>
      </Helmet>
      <PageTitleWrapper>
        <UserPageTitle
          heading="User Details"
          subHeading="View details of the selected user"
          docs=""
          userId={user?.id}
        />
      </PageTitleWrapper>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
            <Avatar
          sx={{
            mr: 2,
            width: 500,
            height: 500
          }}
          variant="rounded"
          alt={"user.name"}
          src={"/static/images/avatars/1.jpg"}
        />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {user?.email || 'User Email'}
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Uirst Name:</strong> {user?.firstName || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Last Name:</strong> {user?.lastName || '-'}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>Phone Number:</strong> {user?.phoneNumber || '-'}
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

export default UserContainer;
