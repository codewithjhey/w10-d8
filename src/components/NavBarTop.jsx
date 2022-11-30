import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const NavBarTop = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <a className="navbar-logo" href="./index.html">
          <img src="netflix_logo.png" alt="netflix-logo" id="netflix-logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Tv Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <Nav>
          <a
            className="nav-link active"
            aria-current="page"
            href="./profile.html"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </a>
          <Nav.Link href="#">KIDS</Nav.Link>
          <a className="nav-link" href="./kids.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </a>
          <Nav.Link className="d-flex">
            <img src="avatar.png" alt="avatar-small" id="avatar-small" />
          </Nav.Link>
          <NavDropdown id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <a
                className="dropdown-item"
                href="http://ubeytdemir.me/netflix-ui/profile.html"
              >
                <div className="d-flex align-items-center">
                  <img src="avatar.png" alt="avatar-small" id="avatar-small" />
                  Ubeyt
                </div>
              </a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <a
                className="dropdown-item"
                href="http://ubeytdemir.me/netflix-ui/profile.html"
              >
                Manage Profiles
              </a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <a
                className="dropdown-item"
                href="http://ubeytdemir.me/netflix-ui/accounts.html"
              >
                Account
              </a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <a className="dropdown-item" href="./help.html">
                Help Center
              </a>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <a className="dropdown-item" href="./signout.html">
                Signout Netflix
              </a>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarTop
