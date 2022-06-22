import React from "react";
import { MenuItems } from "./MenuItems";
import * as S from "./Navbar.styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const refreshPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const Navigate = useNavigate();

  return (
    <S.navContainer>
      <S.NavbarItems>
        <S.navbar_logo>
          <S.logo>
            <Link to="/">
              {" "}
              <img src={logo} alt=""></img>
            </Link>
          </S.logo>
        </S.navbar_logo>
        <S.nav_menu>
          {MenuItems.map((item, index) => {
            return (
              <S.List key={index}>
                <Link
                  to={item.url}
                  onClick={() => {
                    refreshPage();
                  }}
                >
                  {item.title}
                </Link>
              </S.List>
            );
          })}
        </S.nav_menu>
        <S.Button
          onClick={(e) => {
            localStorage.removeItem("token");
            Navigate("/login", { replace: true });
          }}
        >
          ATSIJUNGTI
        </S.Button>
      </S.NavbarItems>
    </S.navContainer>
  );
};

export default NavBar;
