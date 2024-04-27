import LoginPage from 'src/content/applications/auth/LoginPage';
import PublicRouter from '../types/PublicRouter';

const PublicPageRoute: PublicRouter = {
  isPrivate: false,
  routerProps: [
    {
      path: '/login',
      element: <LoginPage />
    }
  ]
};

export default PublicPageRoute;
