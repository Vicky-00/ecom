import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState(''); 

  const toggleSearchBox = () => {
    setShowSearch(prevState => !prevState);
  };

  const toggleNav = () => {
    setShowNav(prevState => !prevState);
  };

  const handleNavClick = (path) => {
    setActiveNav(path);
  };

  return (
    <div>
      <Nav>
        <Logo src={require("../assets/icons/Logo.svg").default} alt="No-Img" />

        {/*NavList*/}
        <NavList showNav={showNav}>
          <NavItem 
            to="/" 
            className={activeNav === '/' ? 'active' : ''}
            onClick={() => handleNavClick('/')}
          >
            Shop
          </NavItem>
          <NavItem 
            to="/men" 
            className={activeNav === '/men' ? 'active' : ''}
            onClick={() => handleNavClick('/men')}
          >
            Men
          </NavItem>
          <NavItem 
            to="/women" 
            className={activeNav === '/women' ? 'active' : ''}
            onClick={() => handleNavClick('/women')}
          >
            Women
          </NavItem>
          <NavItem 
            to="/combos" 
            className={activeNav === '/combos' ? 'active' : ''}
            onClick={() => handleNavClick('/combos')}
          >
            Combos
          </NavItem>
          <NavItem 
            to="/joggers" 
            className={activeNav === '/joggers' ? 'active' : ''}
            onClick={() => handleNavClick('/joggers')}
          >
            Joggers
          </NavItem>
        </NavList>

        <Box>
          <Searchimg
            src={require("../assets/icons/search.svg").default}
            alt="no-img"
            onClick={toggleSearchBox}
          />
          <SearchBox
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            showSearch={showSearch}
          />
        </Box>

        <IconBox>
          <Icon src={require("../assets/icons/wishlist.svg").default} alt="no-img" />
          <Icon src={require("../assets/icons/account.svg").default} alt="no-img" />
          <Icon src={require("../assets/icons/cart.svg").default} alt="no-img" />
        </IconBox>

        {/* Hamburger menu*/}
        <HamburgerIcon onClick={toggleNav}>
          &#9776; 
        </HamburgerIcon>
      </Nav>
    </div>
  );
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  @media screen and (max-width: 480px) {
    padding: 20px 20px;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 400px) {
    display: block;
    width: 70px;
    height: auto;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block; 
  }
  @media screen and (max-width: 400px) {
    display: block;
    font-size: 25px;
  }
`;

const NavList = styled.ul`
  display: flex; 
  list-style: none;
  gap: 28px;
  z-index: 3;
  display: ${({ showNav }) => (showNav ? 'flex' : 'none')}; 
  flex-direction: column; 
  position: absolute;
  top: 68px;
  right: 0;
  background-color: #fff;
  width: 200px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  
  @media screen and (min-width: 769px) {
    display: flex; 
    flex-direction: row;
    position: initial;
    background-color: transparent;
    width: auto;
    box-shadow: none;
  }
  @media screen and (max-width: 400px) {
    top: 58px;
  }
`;

const NavItem = styled(NavLink)`
  color: #7f7d7e;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #3c4241;
    font-weight: bold;
  }

  &.active {
    color: #3c4241;
    font-weight: bold;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: #f5f5f5;
  @media screen and (max-width: 410px) {
    padding: 4px;
  }
`;

const Searchimg = styled.img`
  cursor: pointer;
`;

const SearchBox = styled.input`
  border: none;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
  display: ${({ showSearch }) => (showSearch ? 'none' : 'block')};

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 980px) {
    display: block;
    padding: 2px 5px;
    width: 50px;
  }

  @media screen and (max-width: 890px) {
    display: ${({ showSearch }) => (showSearch ? 'block' : 'none')};
    width: 30px; 
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 2px 5px;
    width: 100px; 
  }

  @media screen and (max-width: 540px) {
    display: ${({ showSearch }) => (showSearch ? 'block' : 'none')};
    width: 30px; 
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.img`
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
  @media screen and (max-width: 400px) {
    padding: 4px;
  }
`;
