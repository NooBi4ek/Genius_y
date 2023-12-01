import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upcoming from '../components/Upcoming';
import Browse from '../components/Browse';

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Upcoming />
      <Browse />
      <Footer />
    </div>
  );
};

export default MainLayout;
