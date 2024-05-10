import Users from 'src/content/admin/Users/UsersTable';
import ProtectedRoute from '../types/ProtectedRoute';
import NewUser from 'src/content/admin/Users/NewUser';
import User from 'src/content/admin/Users/User';
import EditUserConteiner from 'src/content/admin/Users/EditUsers';
import Rims from 'src/content/admin/Rims/RimTable';
import Rim from 'src/content/admin/Rims/Rim';
import EditRimConteiner from 'src/content/admin/Rims/EditRim';
import Tires from 'src/content/admin/Tires/TireTable';
import NewTire from 'src/content/admin/Tires/NewTire';
import Tire from 'src/content/admin/Tires/Tire';
import EditTireConteiner from 'src/content/admin/Tires/EditTire';
import Orders from 'src/content/admin/Orders/OrderTable';
import NewOrder from 'src/content/admin/Orders/NewOrder';
import Order from 'src/content/admin/Orders/Order';
import EditOrderConteiner from 'src/content/admin/Orders/EditOrder';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { ReactNode } from 'react';
import NewRim from 'src/content/admin/Rims/NewRim';

const Routers = [
  {
    path: '/admin/users',
    element: <Users />
  },

  {
    path: '/admin/users/:id',
    element: <User />
  },
  {
    path: '/admin/users/new',
    element: <NewUser />
  },
  {
    path: '/admin/users/:id/edit',
    element: <EditUserConteiner />
  },
  {
    path: '/admin/rims',
    element: <Rims />
  },
  {
    path: '/admin/rims/new',
    element: <NewRim />
  },
  {
    path: '/admin/rims/:id',
    element: <Rim />
  },
  {
    path: '/admin/rims/:id/edit',
    element: <EditRimConteiner />
  },
  {
    path: '/admin/tires',
    element: <Tires />
  },
  {
    path: '/admin/tires/new',
    element: <NewTire />
  },
  {
    path: '/admin/tires/:id',
    element: <Tire />
  },
  {
    path: '/admin/tires/:id/edit',
    element: <EditTireConteiner />
  },

  {
    path: '/admin/orders',
    element: <Orders />
  },
  {
    path: '/admin/orders/new',
    element: <NewOrder />
  },
  {
    path: '/admin/orders/:id',
    element: <Order />
  },
  {
    path: '/admin/orders/:id/edit',
    element: <EditOrderConteiner />
  }
];

const MainWrapper = (children: ReactNode) => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarLayout />
      <div
        style={{
          marginTop: '68px',
          width: '100%'
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: Routers.map((item) => {
    return {
      path: item.path,
      element: MainWrapper(item.element)
    };
  })
};

export default ProtectedPageRoute;
