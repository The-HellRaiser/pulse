import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';
import HomePage from './page';

export const metadata = {
  title: 'PropertyPulse',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
      <div>
        <Navbar></Navbar>
      {children}
    </div>
    </body>
    </html>
    
    
  );
};

export default MainLayout;
