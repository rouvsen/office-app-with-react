import Header from '../Layout/Header'
import Main from './Main'
import Categories from './Categories'
import NewProds from './NewProds'
import InfoReference from './InfoReference'
import SpecialOffers from './SpecialOffers'
import Brands from './Brands'
import Footer from '../Layout/Footer'
import '../../base.css';

function MainPageComponents() {
  return (
    <>
      <Header />
      <Main />
      <Categories />
      <NewProds />
      <InfoReference />
      <SpecialOffers />
      <Brands />
      <Footer />
    </>
  );
}

export default MainPageComponents;
