import { Box, IconButton } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useState } from 'react';
import DeleteModal from 'src/modals/DeleteModal';
import { useDispatch } from 'react-redux';
import { deleteOrderEffect } from 'src/store/effects/order/order.effect';

interface DeleteOrderProps {
  theme: any;
  id: string;
  userId: string;
}
const DeleteOrder = ({ theme, id, userId }: DeleteOrderProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const deleteOrderHandler = () => {
    dispatch(deleteOrderEffect(id, userId));
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
        calback={deleteOrderHandler}
      />
    </Box>
  );
};
export default DeleteOrder;
