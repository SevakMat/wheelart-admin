import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import RimIntegration from '../RImIntegreation/RimIntegration';
import { Container, Grid } from '@mui/material';

interface UploadModalsProps {
  isOpenPopup: boolean;
  setIsOpenPopup: (item: boolean) => void;
}
function UploadModals({ isOpenPopup, setIsOpenPopup }: UploadModalsProps) {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Dialog
          onClose={() => {
            setIsOpenPopup(false);
          }}
          open={isOpenPopup}
        >
          <DialogTitle>Upload Excel file</DialogTitle>
          <RimIntegration setIsOpenPopup={setIsOpenPopup} />
        </Dialog>
      </Grid>
    </Container>
  );
}

export default UploadModals;
