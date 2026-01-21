import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/Auth";

// logo image
import logo from "../../images/eye-spy-500x500.png";

// react-bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  // logout handler
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container className="d-flex">
          <Navbar.Brand href="/">
            <Link to="/">
              <img
                src={logo}
                // class="d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block"
                alt="Eye Spy Logo"
                height={175}
                width={175}
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link
                    href="/dashboard"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    My Dashboard
                  </Nav.Link>
                  <Nav.Link
                    href="/add-destination"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Add A Destination
                  </Nav.Link>
                  <Nav.Link
                    href="/activity-search"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Destination Search
                  </Nav.Link>
                  {/* <Nav.Link href='/search-results' className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">View All Destinations</Nav.Link> */}
                  <Nav.Link
                    href="/search-results"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Search Results
                  </Nav.Link>
                  <a
                    href="/"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                    onClick={logout}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Nav.Link
                    href="/login"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    href="/sign-up"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Sign Up
                  </Nav.Link>
                  <Nav.Link
                    href="/about-us"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="/contact-us"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Contact Us
                  </Nav.Link>

                  {/* this must be taken out once the login auth is functioning on the backend */}
                  {/* <Nav.Link
                    href="/add-destination"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Add Destination
                  </Nav.Link>
                  <Nav.Link
                    href="/dashboard"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Dashboard
                  </Nav.Link> */}

                  {/* search results will only display when the submit button is clicked in the SearchBar */}
                  {/* <Nav.Link
                    href="/search-results"
                    className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end"
                  >
                    Search Results
                  </Nav.Link> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
