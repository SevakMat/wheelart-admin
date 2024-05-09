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
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
  CardHeader
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { UserType } from 'src/store/types/user/user';

interface UsersTableProps {
  className?: string;
  users: UserType[];
}

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const navigate = useNavigate();

  const handleChangePage = (_, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <FormControl fullWidth variant="outlined">
            <InputLabel>Status</InputLabel>
          </FormControl>
        }
        title="Recent Users"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow hover key={user?.id} style={{ cursor: 'pointer' }}>
                  <TableCell
                    onClick={() => navigate(`/admin/users/${user?.id}`)}
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter }
                    }}
                  >
                    {user?.firstName}
                  </TableCell>
                  <TableCell>{user?.lastName}</TableCell>
                  <TableCell>{user?.phoneNumber}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.role}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit User" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                        href={`/admin/users/${user?.id}/edit`}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete User" arrow>
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 30]}
      />
    </Card>
  );
};

export default UsersTable;
