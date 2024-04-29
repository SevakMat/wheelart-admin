import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Container, Grid } from '@mui/material';
import ExcelIntegration from '../RImIntegreation/RimIntegration';

interface UploadModalsProps {
  isOpenPopup: boolean;
  setIsOpenPopup: (item: boolean) => void;
  integreateEXELFileService(file: File): Promise<any>;
}
function UploadModals({
  isOpenPopup,
  setIsOpenPopup,
  integreateEXELFileService
}: UploadModalsProps) {
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
          <ExcelIntegration
            setIsOpenPopup={setIsOpenPopup}
            integreateEXELFileService={integreateEXELFileService}
          />
        </Dialog>
      </Grid>
    </Container>
  );
}

export default UploadModals;
