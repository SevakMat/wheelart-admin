import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import RimIntegration from './content/applications/Rims/RImIntegreation/RimIntegration';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Userstest/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Userstest/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

// new!!!

const Users = Loader(
  lazy(() => import('src/content/applications/Users/UsersTable'))
);
const NewUser = Loader(
  lazy(() => import('src/content/applications/Users/NewUser'))
);
const EditUser = Loader(
  lazy(() => import('src/content/applications/Users/EditUsers'))
);
const User = Loader(lazy(() => import('src/content/applications/Users/User')));

const Rims = Loader(
  lazy(() => import('src/content/applications/Rims/RimTable'))
);
const NewRim = Loader(
  lazy(() => import('src/content/applications/Rims/NewRim'))
);
const EditRim = Loader(
  lazy(() => import('src/content/applications/Rims/EditRim'))
);
const Rim = Loader(lazy(() => import('src/content/applications/Rims/Rim')));

const Tires = Loader(
  lazy(() => import('src/content/applications/Tires/TireTable'))
);
const NewTire = Loader(
  lazy(() => import('src/content/applications/Tires/NewTire'))
);
const EditTire = Loader(
  lazy(() => import('src/content/applications/Tires/EditTire'))
);
const Order = Loader(
  lazy(() => import('src/content/applications/Orders/Order'))
);

const Orders = Loader(
  lazy(() => import('src/content/applications/Orders/OrderTable'))
);
const NewOrder = Loader(
  lazy(() => import('src/content/applications/Orders/NewOrder'))
);
const EditOrder = Loader(
  lazy(() => import('src/content/applications/Orders/EditOrder'))
);
const Tire = Loader(lazy(() => import('src/content/applications/Tires/Tire')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  },

  {
    path: '/admin',
    element: <SidebarLayout />,
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            element: <Users />
          },
          {
            path: 'new',
            element: <NewUser />
          },
          // {
          //   path: ':id',
          //   element: <div>current</div>
          // },
          {
            path: ':id',
            children: [
              {
                path: '',
                element: <User />
              },
              {
                path: 'edit',
                element: <EditUser />
              }
            ]
          }
        ]
      },
      {
        path: 'rims',
        children: [
          {
            path: '',
            element: <Rims />
          },
          {
            path: 'new',
            element: <NewRim />
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                element: <Rim />
              },
              {
                path: 'edit',
                element: <EditRim />
              }
            ]
          }
        ]
      },
      {
        path: 'tires',
        children: [
          {
            path: '',
            element: <Tires />
          },
          {
            path: 'new',
            element: <NewTire />
          },
          // {
          //   path: ':id',
          //   element: <div>current</div>
          // },
          {
            path: ':id',
            children: [
              {
                path: '',
                element: <Tire />
              },
              {
                path: 'edit',
                element: <EditTire />
              }
            ]
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            element: <Orders />
          },
          // {
          //   path: 'new',
          //   element: <NewOrder />
          // },
          // {
          //   path: ':id',
          //   element: <div>current</div>
          // },
          {
            path: ':id',
            children: [
              {
                path: '',
                element: <Order />
              },
              {
                path: 'edit',
                element: <EditOrder />
              }
            ]
          }
        ]
      }
    ]
  }
];

export default routes;
