import { useCallback, useState } from "react";
import {
  Badge,  
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Cart, Search } from "react-bootstrap-icons";
import MiniCart from "./MiniCart";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import AddToCartContext from "../context/AddToCartContext";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const theme = "dark";
  const [miniCart, setMiniCart] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const ctx = useContext(AddToCartContext);
  const { cartItems } = ctx;

  const closeMiniCart = useCallback(() => {
    setTimeout(() => {
      document.getElementsByClassName("mini-cart")[0].style.display = "";
    }, 500);
    setMiniCart(false);
  }, []);

  const closeSearchBar = useCallback(() => {
    setSearchBar(false);
  }, []);

  return (
    <Navbar bg={theme} variant={theme} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/love-logo.png"
            alt="Love Food Court"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <img
                src="/images/love-logo-colored.png"
                alt="Love Food Court"
                className="canvas-logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-start flex-grow-1 pe-3"
              style={{ maxHeight: "100px" }}
            >
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <Nav.Link>Menu</Nav.Link>
              <NavDropdown
                title="Brands"
                id="offcanvasNavbarDropdown-expand-lg"
                variant={theme}
              >
                <NavDropdown.Item href="#kfc">KFC</NavDropdown.Item>
                <NavDropdown.Item href="#mcdonalds">
                  McDonald's
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <div className="d-flex">
                <LinkContainer to="/add-brand">
                  <Nav.Link>
                    {/* <Button className="mx-2" variant="primary"> */}
                    Add Brand
                    {/* </Button> */}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/add-product">
                  <Nav.Link>Add Prouduct</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/update-product">
                  <Nav.Link>Update Product</Nav.Link>
                </LinkContainer>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <div className="navbar-left">
          <div
            className="custom-btn"
            onClick={() => {
              setTimeout(() => {
                setMiniCart(true);
              }, 200);
              document.getElementsByClassName("mini-cart")[0].style.display =
                "block";
            }}
          >
            <Cart /> <Badge>{cartItems}</Badge>{" "}
          </div>
          <div
            className="custom-btn"
            onClick={() => {
              setSearchBar(true);
            }}
          >
            <Search />
          </div>
        </div>
      </Container>
      <MiniCart active={miniCart} click={closeMiniCart} />
      <Searchbar active={searchBar} click={closeSearchBar} />
    </Navbar>
  );
}

export default Header;
