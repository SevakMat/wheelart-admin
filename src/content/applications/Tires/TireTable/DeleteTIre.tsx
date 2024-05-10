import { Box, IconButton } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useState } from 'react';
import DeleteModal from 'src/modals/DeleteModal';
import { useDispatch } from 'react-redux';
import { deleteTireEffect } from 'src/store/effects/tire/tire.effect';

interface DeleteTireProps {
  theme: any;
  id: string;
}
const DeleteTire = ({ theme, id }: DeleteTireProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const deleteTireHandler = () => {
    dispatch(deleteTireEffect(id));
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
        calback={deleteTireHandler}
      />
    </Box>
  );
};
export default DeleteTire;
