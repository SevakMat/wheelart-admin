import axios from '../config/axios';

// Route to get all tires
export const getAllTiresService = async (): Promise<any> => {
  const url = `/api/admin/tires/all`;
  return axios.get(url);
};

// Route to create a new tire
export const createTireService = async (tireData: any): Promise<any> => {
  const url = `/api/admin/tires/create`;
  return axios.post(url, tireData);
};

// Route to get a tire by ID
export const getTireByIdService = async (tireId: string): Promise<any> => {
  const url = `/api/admin/tires/${tireId}`;
  const res = await axios.get(url);
  const {
    data: {
      data: { tire }
    }
  } = res;
  return tire;
};

// Route to update a tire by ID
export const updateTireService = async (
  tireId: string,
  tireData: any
): Promise<any> => {
  const url = `/api/admin/tires/${tireId}`;
  return axios.put(url, tireData);
};

// Route to delete a tire by ID
export const deleteTireService = async (tireId: string): Promise<any> => {
  const url = `/api/admin/tires/${tireId}`;
  return axios.delete(url);
};

export const integreateTireEXELFileService = async (
  file: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post('/api/admin/tires/integreate-exel', formData);
};
