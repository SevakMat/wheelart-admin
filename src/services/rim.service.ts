import { AxiosPromise } from 'axios';
import axios from '../config/axios';
import { RimType } from 'src/models/rim';

// Route to get all rims
export const getAllRimsService = async (): Promise<any> => {
  const url = `/api/admin/rims/all`;
  return axios.get(url);
};

// Route to create a new rim
export const createRimService = async (rimData: any): Promise<any> => {
  const url = `/api/admin/rims/create`;
  return axios.post(url, rimData);
};

// Route to create a new rim
export const integreateRimEXELFileService = async (
  file: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);

  const url = `/api/admin/rims/integreate-exel`;
  return axios.post('/api/admin/rims/integreate-exel', formData);
};

// Route to get a rim by ID
export const getRimByIdService = async (rimId: string): Promise<any> => {
  const url = `/api/admin/rims/${rimId}`;
  return axios.get(url);
};

// Route to update a rim by ID
export const updateRimService = async (
  rimId: string,
  rimData: any
): Promise<any> => {
  const url = `/api/admin/rims/${rimId}`;
  return axios.put(url, rimData);
};

// Route to delete a rim by ID
export const deleteRimService = async (rimId: string): Promise<any> => {
  const url = `/api/admin/rims/${rimId}`;
  return axios.delete(url);
};
