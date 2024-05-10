import { ChangeEvent, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import { useToasts } from 'react-toast-notifications';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      height: 200,
      width: 400,
      dispalay: 'flex'
    },
    fileInput: {
      display: 'none'
    }
  })
);

interface RimIntegrationProps {
  setIsOpenPopup: (item: boolean) => void;
  integreateEXELFileService(file: File): Promise<any>;
}
const ExcelIntegration = ({
  setIsOpenPopup,
  integreateEXELFileService
}: RimIntegrationProps) => {
  const classes = useStyles();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const { addToast } = useToasts();

  const handleFileChange = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    setFile(files[0]);
  };

  const handleUpload = async () => {
    try {
      setIsloading(true);
      await integreateEXELFileService(file);
      addToast('Uploading success', { appearance: 'success' });
    } catch (error) {
      console.log('errorerrorerrorerror', error);

      addToast(error?.response?.data?.message, { appearance: 'error' });
      setIsloading(false);
    } finally {
      setIsOpenPopup(false);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Upload Excel File
      </Typography>
      <input
        accept=".xlsx, .xls"
        className={classes.fileInput}
        id="file-input"
        type="file"
        disabled={isLoading}
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          component="span"
          disabled={isLoading}
          sx={{ mr: 4 }}
        >
          Choose File
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!file || isLoading}
      >
        {isLoading ? 'Loading' : 'Upload'}
      </Button>
    </div>
  );
};

export default ExcelIntegration;
