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
import { Label } from '@mui/icons-material';
import { UserType } from 'src/store/types/user/user';

interface UsersTableProps {
  className?: string;
  users: UserType[];
}

interface Filters {
  status?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  role?: string;
}

const getStatusLabel = (status: string): JSX.Element => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[status];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (users: UserType[], filters: Filters): UserType[] => {
  return users.filter((user) => {
    let matches = true;

    if (filters.email && user.email !== filters.email) {
      matches = false;
    }

    if (filters.firstName && user.firstName !== filters.firstName) {
      matches = false;
    }

    if (filters.lastName && user.lastName !== filters.lastName) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  users: UserType[],
  page: number,
  limit: number
): UserType[] => {
  return users.slice(page * limit, page * limit + limit);
};

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({ status: null });
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

  const handleSelectAllUsers = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedUsers(event.target.checked ? users.map((user) => user.id) : []);
  };

  const handleSelectOneUser = (
    event: ChangeEvent<HTMLInputElement>,
    userId: string
  ): void => {
    if (!selectedUsers.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUsers = applyFilters(users, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedSomeUsers =
    selectedUsers.length > 0 && selectedUsers.length < users.length;
  const selectedAllUsers = selectedUsers.length === users.length;
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.status || 'all'}
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
        title="Recent Users"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllUsers}
                  indeterminate={selectedSomeUsers}
                  onChange={handleSelectAllUsers}
                />
              </TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => {
              const isUserSelected = selectedUsers.includes(user.id);
              return (
                <TableRow
                  hover
                  key={user.id}
                  selected={isUserSelected}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isUserSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneUser(event, user.id)
                      }
                      value={isUserSelected}
                    />
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      navigate(`/admin/users/${user.id}`);
                    }}
                    sx={{
                      '&:hover': {
                        background: theme.colors.primary.lighter
                      }
                    }}
                  >
                    {user.firstName}
                  </TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
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
                        href={`/admin/users/${user.id}/edit`}
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
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredUsers.length}
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

UsersTable.propTypes = {
  users: PropTypes.array.isRequired
};

UsersTable.defaultProps = {
  users: []
};

export default UsersTable;
