import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Grid } from '@mui/material';

interface FormData {
  field1: string;
  field2: string;
  field3: string;
}

const NewTireContainer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    field1: '',
    field2: '',
    field3: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access form data in formData object
    console.log('Form data:', formData);
  };

  return (
    <Card>
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                id="field1"
                label="Field 1"
                value={formData.field1}
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="field2"
                label="Field 2"
                value={formData.field2}
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="field3"
                label="Field 3"
                value={formData.field3}
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewTireContainer;
