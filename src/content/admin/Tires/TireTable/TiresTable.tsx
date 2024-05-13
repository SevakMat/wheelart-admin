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
  Checkbox,
  useTheme,
  CardHeader,
  TextField,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { TireType } from "src/store/types/tire/tire";
import DeleteTire from "./DeleteTIre";

interface TiresTableProps {
  className?: string;
  tires: TireType[];
}

const TiresTable: FC<TiresTableProps> = ({ tires }) => {
  const [selectedTires, setSelectedTires] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleChangePage = (asd: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter tires based on search query
  const filteredTires = tires.filter((tire) =>
    `${tire.marka} ${tire.tireWidth} ${tire.tireAspectRatio} ${tire.rimDiameter}`
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
        title="Recent Tires"
      />
      <Divider />
      <Box sx={{ padding: "0 16px" }}>
        <FormControl fullWidth variant="outlined">
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
        </FormControl>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Marka</TableCell>
              <TableCell>Tire Width</TableCell>
              <TableCell>Tire Aspect Ratio</TableCell>
              <TableCell>Tim Diameter</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTires
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tire) => (
                <TableRow hover key={tire.id} style={{ cursor: "pointer" }}>
                  <TableCell
                    onClick={() => navigate(`/admin/tires/${tire.id}`)}
                    sx={{
                      "&:hover": { background: theme.colors.primary.lighter },
                    }}
                  >
                    {tire.marka}
                  </TableCell>
                  <TableCell>{tire.tireWidth}</TableCell>
                  <TableCell>{tire.tireAspectRatio}</TableCell>
                  <TableCell>{tire.rimDiameter}</TableCell>
                  <TableCell>{tire.stock}</TableCell>
                  <TableCell>{tire.price}</TableCell>
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
                          navigate(`/admin/tires/${tire.id}/edit`);
                        }}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    {tire.id && <DeleteTire theme={theme} id={tire.id} />}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredTires.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 30]}
      />
    </Card>
  );
};

export default TiresTable;
