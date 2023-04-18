import { Nav, NavLink, NavMenu } 
    from "./NavbarStyles";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/unicafe" activestyle='true'>
            Unicafe
          </NavLink>
          <NavLink to="/anecdotes" activestyle='true'>
            Anecdotes
          </NavLink>
          <NavLink to="/phonebook" activestyle='true'>
            Phonebook
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;