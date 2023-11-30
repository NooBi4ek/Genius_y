import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upcoming from '../components/Upcoming';

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default MainLayout;
