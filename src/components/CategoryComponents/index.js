import Header from '../Layout/Header'
import CategoryHeadSection from './CategoryHeadSection'
import SimilarCategories from './SimilarCategories'
import CategoryProducts from './CategoryProducts'
import Footer from '../Layout/Footer'
// import { Link } from "react-router-dom";
import '../../base.css';

function CategoryComponents() {
  return (
    <>
      <Header />
      <CategoryHeadSection />
      <CategoryProducts />
      <SimilarCategories />
      {/* <Link to="/">MainPage</Link> */}
      <Footer />
    </>
  );
}

export default CategoryComponents;
