import { Outlet, useMatches } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
  const matches = useMatches();
  
  const isErrorPage = matches.some(match => match.handle?.isErrorPage);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 py-8">
        <Outlet />
      </div>
      {!isErrorPage && <Footer />}
    </div>
  );
};

export default Root;