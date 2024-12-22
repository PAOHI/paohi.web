import Home from './home';
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgotPassword';
import CreateAccount from './auth/CreateAccount';

import NotFound from './notFound';

// pages
const HomePage: React.FC = () => <Home />;
const LoginPage: React.FC = () => <Login />;
const CreateAccountPage: React.FC = () => <CreateAccount />;
const ForgotPasswordPage: React.FC = () => <ForgotPassword />;
const ResetPasswordPage: React.FC = () => <ResetPassword />;

const NotFoundPage: React.FC = () => <NotFound />;

// export
export { HomePage, LoginPage, CreateAccountPage, ForgotPasswordPage, ResetPasswordPage, NotFoundPage };
