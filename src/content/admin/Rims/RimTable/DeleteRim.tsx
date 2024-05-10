import { Box, IconButton } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useState } from 'react';
import DeleteModal from 'src/modals/DeleteModal';
import { useDispatch } from 'react-redux';
import { deleteRimEffect } from 'src/store/effects/rim/rim.effect';

interface DeleteRimProps {
  theme: any;
  id: string;
}
const DeleteRim = ({ theme, id }: DeleteRimProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const deleteRimHandler = () => {
    dispatch(deleteRimEffect(id));
  };

  return (
    <Box>
      <IconButton
        sx={{
          '&:hover': { background: theme.colors.error.lighter },
          color: theme.palette.error.main
        }}
        color="inherit"
        size="small"
        onClick={() => {
          setOpen(true);
        }}
      >
        <DeleteTwoToneIcon fontSize="small" />
      </IconButton>
      <DeleteModal
        isOpenPopup={open}
        setIsOpenPopup={setOpen}
        calback={deleteRimHandler}
      />
    </Box>
  );
};
export default DeleteRim;
