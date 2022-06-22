import React from "react";
import * as S from "./Navbar.styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navigation = () => {
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
          <S.List>
            <Link
              to="/login"
              onClick={() => {
                refreshPage();
              }}
            >
              PRISIJUNGTI
            </Link>
          </S.List>
          <S.List>
            <Link
              to="/register"
              onClick={() => {
                refreshPage();
              }}
            >
              REGISTRUOTIS
            </Link>
          </S.List>
        </S.nav_menu>
        <S.Button
          onClick={(e) => {
            localStorage.removeItem("token");
            Navigate("/login", { replace: true });
          }}
        >
          LOG OUT
        </S.Button>
      </S.NavbarItems>
    </S.navContainer>
  );
};

export default Navigation;
