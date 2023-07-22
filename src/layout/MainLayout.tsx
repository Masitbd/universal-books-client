import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';


export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="pt-16 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
