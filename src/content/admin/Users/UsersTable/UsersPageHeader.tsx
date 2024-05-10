import { Typography, Button, Grid, Card } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function UsersPageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2
      }}
    >
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Users
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href={'/admin/users/new'}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create user
        </Button>
      </Grid>
    </Card>
  );
}

export default UsersPageHeader;
