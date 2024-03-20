import { useEffect } from 'react';
import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './UsersTable';
import { subDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from 'src/store';
import { getAllUsersEffect } from 'src/store/effects/user/user.effect';

function UserConteiner() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllUsersEffect()
    );
  }, []);


  const { userList} = useAppSelector((state: RootState) => state.user);

  return (
    <Card>
      <RecentOrdersTable users={userList} />
    </Card>
  );
}

export default UserConteiner;
