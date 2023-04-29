import { Container } from "react-bootstrap";
import FoodArea from "../Components/FoodArea";
import HeroSlider from "../Components/HeroSlider";
import SemiBanners from "../Components/SemiBanners";
import FooterTop from "../Components/FooterTop";

function Home() {
  
  return (
    <>
      <Container>
        <HeroSlider/>
        <SemiBanners/>
        <FoodArea/>
        {/* <BrandsLogo/> */}
        <FooterTop/>
      </Container>
    </>
  )

}

export default Home;
