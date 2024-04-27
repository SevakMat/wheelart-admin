import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
import UploadModals from './UploadPopup';

function RimsPageHeader() {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Rims
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href={'/admin/rims/new'}
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create rim
        </Button>
        <Button
          type="button"
          onClick={() => setIsOpenPopup(true)}
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
        >
          Upload exel
        </Button>
      </Grid>
      <UploadModals isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
    </Grid>
  );
}

export default RimsPageHeader;
