import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Divider,
  Box,
  FormControl,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
  CardHeader,
  TextField,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { OrderType } from "src/store/types/order/order";
import { DateFormatter } from "src/helpers/DateFormatter";
import DeleteOrder from "./DeleteOrder";

interface OrdersTableProps {
  className?: string;
  orders: OrderType[];
}

const OrdersTable: FC<OrdersTableProps> = ({ orders }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChangePage = (asd: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter orders based on search query
  const filteredOrders = orders.filter((order) =>
    `${order.name} ${order.userName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader
        action={<FormControl fullWidth variant="outlined"></FormControl>}
        title="Recent Orders"
      />
      <Divider />
      <Box sx={{ padding: "0 16px" }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(0);
          }}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Order Count</TableCell>
              <TableCell>Order Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Order Status</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <TableRow hover key={order.id} style={{ cursor: "pointer" }}>
                  <TableCell
                    onClick={() => {
                      navigate(`/admin/orders/${order.id}`);
                    }}
                    sx={{
                      "&:hover": {
                        background: theme.colors.primary.lighter,
                      },
                    }}
                  >
                    {order.id}
                  </TableCell>
                  <TableCell>{order.itemCount}</TableCell>
                  <TableCell>{order.orderType}</TableCell>
                  <TableCell
                    onClick={() => {
                      navigate(
                        `/admin/${
                          order.orderType === "RIM" ? "rims" : "tires"
                        }/${order.itemId}`
                      );
                    }}
                  >
                    {order.name}
                  </TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell
                    onClick={() => {
                      navigate(`/admin/users/${order.userId}`);
                    }}
                  >
                    {order.userName}
                  </TableCell>
                  <TableCell>
                    {order?.createdDate && DateFormatter(order?.createdDate)}
                  </TableCell>
                  <TableCell>
                    <Box>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                        onClick={() => {
                          navigate(`/orders/${order.id}/edit`);
                        }}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    {order.id && order.userId && (
                      <DeleteOrder
                        theme={theme}
                        id={order.id}
                        userId={order.userId}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredOrders.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

export default OrdersTable;
