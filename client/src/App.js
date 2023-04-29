import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/App.css";
import "swiper/css";
import Footer from "./Components/Footer";
import AddToCartState from "./context/AddToCartState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddBrand from "./Pages/AddBrand";
import AddProduct from "./Pages/AddProduct";

function App() {
  return (
    <AddToCartState>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/add-brand" element={<AddBrand/>} />
            <Route exact path="/add-product" element={<AddProduct/>} />           
          </Routes>
        </Container>
        <Footer />
      </Router>
    </AddToCartState>
  );
}

export default App;
