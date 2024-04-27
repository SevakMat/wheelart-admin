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
import { RimType } from 'src/store/types/rim/rim';
import { Label } from '@mui/icons-material';

interface RimsTableProps {
  className?: string;
  rims: RimType[];
}

interface Filters {
  status?: string;
  studHoles?: string;
  sizeR?: string;
  pcd?: string;
  centerBore?: string;
  width?: string;
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

const applyFilters = (rims: RimType[], filters: Filters): RimType[] => {
  return rims.filter((rim) => {
    let matches = true;

    // if (filters.status && rim.status !== filters.status) {
    //   matches = false;
    // }

    if (filters.studHoles && rim.studHoles !== filters.studHoles) {
      matches = false;
    }

    if (filters.sizeR && rim.sizeR !== filters.sizeR) {
      matches = false;
    }

    if (filters.pcd && rim.pcd !== filters.pcd) {
      matches = false;
    }

    if (filters.centerBore && rim.centerBore !== filters.centerBore) {
      matches = false;
    }

    if (filters.width && rim.width !== filters.width) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  rims: RimType[],
  page: number,
  limit: number
): RimType[] => {
  return rims.slice(page * limit, page * limit + limit);
};

const RimsTable: FC<RimsTableProps> = ({ rims }) => {
  const [selectedRims, setSelectedRims] = useState<string[]>([]);
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

  const handleSelectAllRims = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedRims(event.target.checked ? rims.map((rim) => rim.id) : []);
  };

  const handleSelectOneRim = (
    event: ChangeEvent<HTMLInputElement>,
    rimId: string
  ): void => {
    if (!selectedRims.includes(rimId)) {
      setSelectedRims((prevSelected) => [...prevSelected, rimId]);
    } else {
      setSelectedRims((prevSelected) =>
        prevSelected.filter((id) => id !== rimId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredRims = applyFilters(rims, filters);
  const paginatedRims = applyPagination(filteredRims, page, limit);
  const selectedSomeRims =
    selectedRims.length > 0 && selectedRims.length < rims.length;
  const selectedAllRims = selectedRims.length === rims.length;
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
        title="Recent Rims"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllRims}
                  indeterminate={selectedSomeRims}
                  onChange={handleSelectAllRims}
                />
              </TableCell>
              <TableCell>Rim Model</TableCell>
              <TableCell>Size R</TableCell>
              <TableCell>Stud Holes</TableCell>
              <TableCell>PCD</TableCell>
              <TableCell>Center Bore</TableCell>
              <TableCell>Width</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Gram</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRims.map((rim) => {
              const isRimSelected = selectedRims.includes(rim.id);
              return (
                <TableRow
                  hover
                  key={rim.id}
                  selected={isRimSelected}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isRimSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneRim(event, rim.id)
                      }
                      value={isRimSelected}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      '&:hover': {
                        background: theme.colors.primary.lighter
                      }
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
                  <TableCell>{rim.color}</TableCell>
                  <TableCell>{rim.gram}</TableCell>
                  <TableCell>{rim.description}</TableCell>
                  <TableCell>{rim.price}</TableCell>
                  <TableCell>{rim.score}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit Rim" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                        onClick={(e) => {
                          navigate(`/admin/rims/${rim.id}/edit`);
                        }}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Rim" arrow>
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
          count={filteredRims.length}
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

RimsTable.propTypes = {
  rims: PropTypes.array.isRequired
};

RimsTable.defaultProps = {
  rims: []
};

export default RimsTable;
