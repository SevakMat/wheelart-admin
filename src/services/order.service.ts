import axios from '../config/axios';

// Route to get all orders
export const getAllOrdersService = async (): Promise<any> => {
  const url = `/api/admin/orders/all`;
  return axios.get(url);
};

// Route to create a new order
export const createOrderService = async (orderData: any): Promise<any> => {
  const url = `/api/admin/orders/create`;
  return axios.post(url, orderData);
};

// Route to get a order by ID
export const getOrderByIdService = async (orderId: string): Promise<any> => {
  const url = `/api/admin/orders/${orderId}`;
  return axios.get(url);
};

// Route to update a order by ID
export const updateOrderService = async (
  orderId: string,
  orderData: any
): Promise<any> => {
  const url = `/api/admin/orders/${orderId}`;
  return axios.put(url, orderData);
};

// Route to delete a order by ID
export const deleteOrderService = async (
  orderId: string,
  userId: string
): Promise<any> => {
  const url = `/api/admin/orders/${orderId}`;
  return axios.post(url, { userId });
};
