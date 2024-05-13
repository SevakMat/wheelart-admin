import { FC, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  TextField,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { RimType } from "src/store/types/rim/rim";
import DeleteRim from "./DeleteRim";

interface RimsTableProps {
  className?: string;
  rims: RimType[];
}

const RimsTable: FC<RimsTableProps> = ({ rims }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const navigate = useNavigate();

  const handleChangePage = (asd: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter users based on search query
  const filteredUsers = rims.filter((rim) =>
    `${rim.rimModel}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
            </FormControl>
          </>
        }
        title="Recent Rims"
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
              <TableCell>ID</TableCell>
              <TableCell>Rim Model</TableCell>
              <TableCell>Size R</TableCell>
              <TableCell>Stud Holes</TableCell>
              <TableCell>PCD</TableCell>
              <TableCell>Center Bore</TableCell>
              <TableCell>Width</TableCell>
              <TableCell>Gram</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rim) => (
                <TableRow hover key={rim.id} style={{ cursor: "pointer" }}>
                  <TableCell>{rim.id}</TableCell>
                  <TableCell
                    sx={{
                      "&:hover": {
                        background: theme.colors.primary.lighter,
                      },
                    }}
                    onClick={(e) => {
                      navigate(`/admin/rims/${rim.id}`);
                    }}
                  >
                    {rim.rimModel}
                  </TableCell>
                  <TableCell>{rim.sizeR}</TableCell>
                  <TableCell>{rim.studHoles}</TableCell>
                  <TableCell>{rim.pcd}</TableCell>
                  <TableCell>{rim.centerBore}</TableCell>

                  <TableCell>{rim.width}</TableCell>
                  <TableCell>{rim.gram}</TableCell>
                  <TableCell>{rim.description}</TableCell>
                  <TableCell>{rim.price}</TableCell>
                  <TableCell>{rim.stock}</TableCell>
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
                        onClick={(e) => {
                          navigate(`/admin/rims/${rim.id}/edit`);
                        }}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    {rim.id && (
                      <Box>
                        <DeleteRim theme={theme} id={rim.id} />
                      </Box>
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
          count={filteredUsers.length} // Use filteredUsers length for pagination
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

export default RimsTable;
