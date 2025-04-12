import { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import routes from './routes';
import { toast } from 'sonner';
import AuthGuard from './authGuard';
import { getNetworkStatus } from './lib/utils';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App = () => {
  const [isOnline, setIsOnline] = useState(getNetworkStatus());
  const [isReloaded, setIsReloaded] = useState(true);

  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(getNetworkStatus());
    };

    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsOnline(getNetworkStatus());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isReloaded && !isOnline) {
      toast("You are offline, some content won't be visible", {
        duration: 2000,
      });
    }
    setIsReloaded(false);
  }, [isReloaded, isOnline]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className='antialiased min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow'>
          <Suspense fallback={<Loader />}>
            <Routes>
              {routes.map(route =>
                route.authRequired ? (
                  <Route key={route.path} path={route.path} element={<AuthGuard />}>
                    <Route path={route.path} element={route.element} />
                  </Route>
                ) : (
                  <Route key={route.path} path={route.path} element={route.element} />
                )
              )}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
