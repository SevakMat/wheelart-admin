import Users from 'src/content/applications/Users/UsersTable';
import ProtectedRoute from '../types/ProtectedRoute';
import NewUser from 'src/content/applications/Users/NewUser';
import User from 'src/content/applications/Users/User';
import EditUser from 'src/content/applications/Users/EditUsers/EditUser';
import EditUserConteiner from 'src/content/applications/Users/EditUsers';
import Rims from 'src/content/applications/Rims/RimTable';
import Rim from 'src/content/applications/Rims/Rim';
import EditRimConteiner from 'src/content/applications/Rims/EditRim';
import Tires from 'src/content/applications/Tires/TireTable';
import NewTire from 'src/content/applications/Tires/NewTire';
import Tire from 'src/content/applications/Tires/Tire';
import EditTireConteiner from 'src/content/applications/Tires/EditTire';
import Orders from 'src/content/applications/Orders/OrderTable';
import NewOrder from 'src/content/applications/Orders/NewOrder';
import Order from 'src/content/applications/Orders/Order';
import EditOrderConteiner from 'src/content/applications/Orders/EditOrder';

const ProtectedPageRoute: ProtectedRoute = {
  isPrivate: true,
  routerProps: [
    {
      path: '/admin/users',
      element: <Users />
    },
    {
      path: '/admin/users/new',
      element: <NewUser />
    },
    {
      path: '/admin/users/:id',
      element: <User />
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
      element: <NewUser />
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
  ]
};

export default ProtectedPageRoute;