import React from 'react'
import { Container, NavDropdown } from 'react-bootstrap';
// import { Container,row,col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// here is no achor tag so we will use LinkContainer
import { LinkContainer} from 'react-router-bootstrap';
import {useDispatch,useSelector} from "react-redux"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { logout } from './Actions/userAction';
import logoImage from 'C:/Users/Admin/Downloads/the_plant_cabinet/the_plant_cabinet/frotend/src/logo.jpeg';


function Header() {
const dispatch=useDispatch()
  const userLogin = useSelector(state=>state.userLogin)
  const{userInfo} = userLogin
  console.log(userInfo,14)

  const logoutHandler=()=>{
dispatch(logout())

  }
 
  return (
        <header>
          <Navbar collapseOnSelect>
            <Container>
              <LinkContainer to="/"><Navbar.Brand ><img src={logoImage} className="d-inline-block align-top img-logo"
              alt="The Plant Cabinet Logo"/> 
              <div class="project-name logo"></div> <span class="logo">The Plant Cabinet</span> </Navbar.Brand></LinkContainer>
              <form action="" class="serach-bar-container">
                    <input type="search" class="search-header" id="search-bar" placeholder="Search here..."></input>
                    <button class="search-btn search-header" placeholder="Search">Search</button>
              </form>
             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              {
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
                 {/* Cart Icon */}
                 <LinkContainer to={userInfo ? `/cart` : '/'}>
                   <Nav.Link id="cart-button">
                     <i className='fas fa-shopping-cart'></i> Cart
                   </Nav.Link>
                 </LinkContainer>
                 
                 {/* Sign In Link */}
                 <Nav>
                   {userInfo ? (
                     <NavDropdown title={userInfo.name} id='username'>
                       <LinkContainer to='/profile'>
                         <DropdownItem> Profile </DropdownItem>
                       </LinkContainer>
                       <DropdownItem onClick={logoutHandler}>Logout </DropdownItem>
                     </NavDropdown>
                   ) : (
                     <LinkContainer  to="/login">
                       <Nav.Link  id="signin-button">
                         <i className='fas fa-user'></i>Sign In
                       </Nav.Link>
                     </LinkContainer>
                   )}
                 </Nav>
               </Nav>
             </Navbar.Collapse>

}
              </Container>
          </Navbar>
          </header>
        );
      }
      
      
      export default Header


     



    