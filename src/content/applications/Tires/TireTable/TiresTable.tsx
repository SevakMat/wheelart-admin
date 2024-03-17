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
  CardHeader,
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { TireType } from 'src/store/types/tire/tire';

interface TiresTableProps {
  className?: string;
  tires: TireType[];
}

interface Filters {
  status?: string;
  tireWidth?: string,
  tireAspectRatio?: string,
  rimDiameter?: string,
  marka?: string,
  stock?: string,
  imageUrl?: string,
}


const applyFilters = (tires: TireType[], filters: Filters): TireType[] => {

  return tires.filter((tire) => {
    let matches = true;

    if (filters.tireWidth && tire.tireWidth !== filters.tireWidth) {
      matches = false;
    }

    if (filters.tireAspectRatio && tire.tireAspectRatio !== filters.tireAspectRatio) {
      matches = false;
    }

    if (filters.rimDiameter && tire.rimDiameter !== filters.rimDiameter) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (tires: TireType[], page: number, limit: number): TireType[] => {
  return tires.slice(page * limit, page * limit + limit);
};

const TiresTable: FC<TiresTableProps> = ({ tires }) => {
  const [selectedTires, setSelectedTires] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({ status: null });
  const navigate = useNavigate();

  const statusOptions = [
    {
      id: 'all',
      name: 'All',
    },
    {
      id: 'completed',
      name: 'Completed',
    },
    {
      id: 'pending',
      name: 'Pending',
    },
    {
      id: 'failed',
      name: 'Failed',
    },
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleFilterChange = (filter: string, value: string): void => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  const handleSelectAllTiress = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedTires(
      event.target.checked
        ? tires.map((tire) => tire.id)
        : []
    );
  };

  const handleSelectOneTire = (event: ChangeEvent<HTMLInputElement>, tireId: string): void => {
    if (!selectedTires.includes(tireId)) {
      setSelectedTires((prevSelected) => [
        ...prevSelected,
        tireId
      ]);
    } else {
      setSelectedTires((prevSelected) =>
        prevSelected.filter((id) => id !== tireId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredTires = applyFilters(tires, filters);
  const paginatedTires = applyPagination(filteredTires, page, limit);
  const selectedSomeTires = selectedTires.length > 0 && selectedTires.length < tires.length;
  const selectedAllTires = selectedTires.length === tires.length;
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
        title="Recent Tires"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllTires}
                  indeterminate={selectedSomeTires}
                  onChange={handleSelectAllTiress}
                />
              </TableCell>
              <TableCell>Tire Width</TableCell>
              <TableCell>Tire Aspect Ratio</TableCell>
              <TableCell>Tim Diameter</TableCell>
              <TableCell>Marka</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTires.map((tire) => {
              const isTireSelected = selectedTires.includes(tire.id);
              return (
                <TableRow
                  hover
                  key={tire.id}
                  selected={isTireSelected}
                  style={{ cursor: 'pointer' }} 
                  onClick={() => {navigate(`/admin/tires/${tire.id}`)}}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isTireSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneTire(event, tire.id)
                      }
                      value={isTireSelected}
                    />
                  </TableCell>
                  <TableCell>{tire.tireWidth}</TableCell>
                  <TableCell>{tire.tireAspectRatio}</TableCell>
                  <TableCell>{tire.rimDiameter}</TableCell>
                  <TableCell>{tire.marka}</TableCell>
                  <TableCell>{tire.stock}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit Tire" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                        href={`./tires/${tire.id}/edit`}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Tire" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
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
          count={filteredTires.length}
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

TiresTable.propTypes = {
  tires: PropTypes.array.isRequired,
};

TiresTable.defaultProps = {
  tires: [],
};

export default TiresTable;
