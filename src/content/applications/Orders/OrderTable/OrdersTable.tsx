import { FC, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  useTheme,
  CardHeader
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { OrderType } from 'src/store/types/order/order';

interface OrdersTableProps {
  className?: string;
  orders: OrderType[];
}

interface Filters {
  orderType: string;
  itemId: string;
  itemCount: string;
}

const applyFilters = (orders: OrderType[], filters: Filters): OrderType[] => {
  return orders.filter((order) => {
    let matches = true;

    if (filters?.orderType && order?.orderType !== filters?.orderType) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  orders: OrderType[],
  page: number,
  limit: number
): OrderType[] => {
  return orders.slice(page * limit, page * limit + limit);
};

const OrdersTable: FC<OrdersTableProps> = ({ orders }) => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>();
  const navigate = useNavigate();

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleFilterChange = (filter: string, value: string): void => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value
    }));
  };

  const handleSelectAllOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedOrders(
      event.target.checked ? orders.map((order) => order.id) : []
    );
  };

  const handleSelectOneOrder = (
    event: ChangeEvent<HTMLInputElement>,
    orderId: string
  ): void => {
    if (!selectedOrders.includes(orderId)) {
      setSelectedOrders((prevSelected) => [...prevSelected, orderId]);
    } else {
      setSelectedOrders((prevSelected) =>
        prevSelected.filter((id) => id !== orderId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredOrders = applyFilters(orders, filters);
  const paginatedOrders = applyPagination(filteredOrders, page, limit);
  const selectedSomeOrders =
    selectedOrders.length > 0 && selectedOrders.length < orders.length;
  const selectedAllOrders = selectedOrders.length === orders.length;
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select
                value={filters?.orderType || 'all'}
                onChange={handleStatusChange}
                label="Status"
                autoWidth
              >
                {statusOptions.map((statusOption) => (
                  <MenuItem key={statusOption.id} value={statusOption.id}>
                    {statusOption.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        }
        title="Recent Orders"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllOrders}
                  indeterminate={selectedSomeOrders}
                  onChange={handleSelectAllOrders}
                />
              </TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Order Count</TableCell>
              <TableCell>Item Id</TableCell>
              <TableCell>Order Type</TableCell>
              <TableCell>Order Status</TableCell>
              <TableCell>User ID</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order: OrderType) => {
              const isOrderSelected = selectedOrders.includes(order.id);
              console.log(order);

              return (
                <TableRow
                  hover
                  key={order.id}
                  selected={isOrderSelected}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    // navigate(`/admin/orders/${order.id}`);
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isOrderSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneOrder(event, order.id)
                      }
                      value={isOrderSelected}
                    />
                  </TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.itemCount}</TableCell>
                  <TableCell
                    onClick={() => {
                      navigate(
                        `/admin/${
                          order.orderType === 'RIM' ? 'rims' : 'tires'
                        }/${order.itemId}`
                      );
                    }}
                  >
                    {order.itemId}
                  </TableCell>
                  <TableCell>{order.orderType}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell
                    onClick={() => {
                      navigate(`/admin/users/${order.userId}`);
                    }}
                  >
                    {order.userId}
                  </TableCell>

                  <TableCell>
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                        href={`orders/${order.id}/edit`}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
};

OrdersTable.defaultProps = {
  orders: []
};

export default OrdersTable;
