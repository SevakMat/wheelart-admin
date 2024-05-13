import { FC, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CardHeader,
  TextField, // Import TextField component from MUI
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { UserType } from "src/store/types/user/user";
import DeleteUser from "./DeleteUser";
import { RootState, useAppSelector } from "src/store";

interface UsersTableProps {
  className?: string;
  users: UserType[];
}

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const { user: auth_user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChangePage = (_, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

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
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow hover key={user?.id} style={{ cursor: "pointer" }}>
                  <TableCell
                    onClick={() => navigate(`/admin/users/${user?.id}`)}
                    sx={{
                      "&:hover": { background: theme.colors.primary.lighter },
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
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                        href={`/admin/users/${user?.id}/edit`}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    {user.id.toString() !== auth_user?.id.toString() && (
                      <Tooltip title="Delete User" arrow>
                        <DeleteUser theme={theme} id={user.id} />
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredUsers.length} // Use filteredUsers length for pagination
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
