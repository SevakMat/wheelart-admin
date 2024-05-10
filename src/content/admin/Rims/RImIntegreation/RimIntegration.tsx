import { ChangeEvent, useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import useMutation from 'src/hooks/useMutation';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center'
      //   marginTop: (4),
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

  const [uploadExcel, { data, isLoading }] = useMutation();

  useEffect(() => {
    if (data) {
      setFile(null);
    }
  }, [data]);

  const handleFileChange = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    setFile(files[0]);
  };

  const handleUpload = () =>
    uploadExcel(() => {
      if (file) {
        return integreateEXELFileService(file);
      } else {
        throw new Error('File is required');
      }
    });

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
        <Button variant="contained" component="span" disabled={isLoading}>
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
