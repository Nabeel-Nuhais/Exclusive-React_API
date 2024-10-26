import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MainHeader>
      <Wrapper>
        <HamburgerWrapper onClick={toggleMobileMenu}>
          <HamburgerIcon
            src={require("../../assets/images/icons/hamburger.svg").default}
            alt="hamburger-icon"
          />
        </HamburgerWrapper>

        <BrandSection to={"/"}>
          <Logo>Exclusive</Logo>
        </BrandSection>

        <NavWrapper $isMobileMenuOpen={isMobileMenuOpen}>
          <CloseIconWrapper onClick={toggleMobileMenu}>
            <CloseIcon
              src={require("../../assets/images/icons/close-icon.svg").default}
              alt="close-icon"
            />
          </CloseIconWrapper>
          <NavSection>
            <NavListWrapper>
              <NavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/about">About</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/signup">Sign Up</StyledNavLink>
              </NavItem>
            </NavListWrapper>
          </NavSection>
        </NavWrapper>

        <RightSection>
          <SearchBar>
            <SearchInput type="text" placeholder="What are you looking for?" />
            <SearchButton>
              <SearchIcon
                src={require("../../assets/images/icons/search.svg").default}
                alt="search-icon"
              />
            </SearchButton>
          </SearchBar>

          <WishlistIconWrapper>
            <WishlistIcon
              src={require("../../assets/images/icons/wishlist.svg").default}
              alt="wishlist-icon"
            />
          </WishlistIconWrapper>

          <CartIconWrapper>
            <CartIcon
              src={require("../../assets/images/icons/Cart.svg").default}
              alt="cart-icon"
            />
          </CartIconWrapper>
        </RightSection>
      </Wrapper>
    </MainHeader>
  );
};

// Styled Components

const MainHeader = styled.header`
  padding-top: 44px;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 7px;
`;

const Wrapper = styled.section`
  max-width: 100%;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandSection = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
  justify-content: start;
  cursor: pointer;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 980px) {
    padding-bottom: 5px;
  }
`;

const NavWrapper = styled.div`
  @media (max-width: 980px) {
    display: ${(props) => (props.$isMobileMenuOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

const NavSection = styled.nav`
  display: flex;
  @media (max-width: 980px) {
    position: absolute;
    top: 19%;
    left: 12%;
  }
`;

const NavListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 25px;
  list-style: none;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    font-weight: bold;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: black;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #f5f5f5;
  padding: 5px 10px;
  background-color: #f5f5f5;
  border-radius: 7px;
  cursor: pointer;

  @media (max-width: 980px) {
    border: none;
    background: #fff;
    padding: 0;
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: #f5f5f5;
  outline: none;
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 980px) {
    display: none;
  }
`;

const SearchButton = styled.div`
  cursor: pointer;
  display: flex;
`;

const SearchIcon = styled.img`
  height: 18px;

  @media (max-width: 540px) {
    height: 16px;
  }
`;

const WishlistIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
`;

const WishlistIcon = styled.img`
  height: 18px;
  @media (max-width: 540px) {
    height: 16px;
  }
`;

const CartIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
`;

const CartIcon = styled.img`
  height: 22px;
  @media (max-width: 540px) {
    height: 20px;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 980px) {
    display: flex;
  }
`;

const HamburgerIcon = styled.img`
  height: 24px;
  @media (max-width: 540px) {
    height: 21px;
  }
`;

const CloseIconWrapper = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: block;
    position: absolute;
    left: 12%;
    top: 8%;
  }
`;

const CloseIcon = styled.img`
  height: 24px;
  cursor: pointer;
`;

export default Header;
