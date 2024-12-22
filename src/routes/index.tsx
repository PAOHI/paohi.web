import { HomePage, LoginPage, ForgotPasswordPage, ResetPasswordPage, CreateAccountPage, NotFoundPage } from '@/pages';

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/create-account', element: <CreateAccountPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/reset-password/:resetToken', element: <ResetPasswordPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
