
import './App.css';
import Banner from './pages/Banner/Banner';
import Best from './pages/Best/Best';

import FiveSection from './pages/FiveSection';
import Footer from './pages/Footer';
import FourthPage from './pages/FourthPage/FourthPage';

import FromOurBlog from './pages/FromOurBlog/FromOurBlog';
import ImgNews from './pages/ImgNews/ImgNews';
import Intuch from './pages/Intuch/Intuch';
import Navbar from './pages/Navbar/Navbar';
import ShopByBrand from './pages/ShopByBrand/ShopByBrand';

function App() {
  return (
    <div className="App">
      <Navbar className="m-9"></Navbar>
      
       <Banner></Banner>
       <ShopByBrand></ShopByBrand>
      <FourthPage></FourthPage>
      <FiveSection></FiveSection>
      <Best></Best>
      <Intuch></Intuch>
      <FromOurBlog></FromOurBlog>
      <ImgNews></ImgNews>
      <Footer></Footer>
    </div>
  );
}

export default App;
