import { useState } from 'react';

import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import UploadModals from '../../Rims/RimTable/UploadPopup';
import { integreateTireEXELFileService } from 'src/services/tire.service';

function TiresPageHeader() {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Tires
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href={'/admin/tires/new'}
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create tire
        </Button>
        <Button
          type="button"
          onClick={() => setIsOpenPopup(true)}
          sx={{ mt: { xs: 2, md: 0 }, ml: 4 }}
          variant="contained"
        >
          Upload exel
        </Button>
      </Grid>
      <UploadModals
        isOpenPopup={isOpenPopup}
        setIsOpenPopup={setIsOpenPopup}
        integreateEXELFileService={integreateTireEXELFileService}
      />
    </Grid>
  );
}

export default TiresPageHeader;
