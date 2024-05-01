import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import modules from './routers';
import { RootState } from '../store';
import { useAppSelector } from '../store';

const RoutersContainer: () => JSX.Element = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {modules.map(({ isPrivate, routerProps }) => {
          return routerProps.map((flan) =>
            isPrivate && !isLoggedIn ? (
              <Route path={flan.path} element={<Navigate to="/login" />} />
            ) : !isPrivate && isLoggedIn ? (
              <Route
                path={flan.path}
                element={<Navigate to="/admin/users" />}
              />
            ) : (
              <Route path={flan.path} element={flan.element} />
            )
          );
        })}
        <Route path={'*'} element={<>not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersContainer;
