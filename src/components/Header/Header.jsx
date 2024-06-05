import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import Drawer from "react-modern-drawer";
import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import "./Header.scss";

export default function Header({ token, setToken }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <Link className="header__left-link" to={"/"}>
            <h2 className="header__name-1">The</h2>
            <h2 className="header__name-1">Local Shop</h2>
          </Link>
        </div>
        <div className="header__right">
          {token ? (
            <Link
              className="header__link"
              to={"/"}
              onClick={() => {
                localStorage.removeItem("token");
                setToken(null);
              }}
            >
              <div className="header__box">
                <h2 className="header__box-logout">LOG OUT</h2>
              </div>
            </Link>
          ) : (
            <div className="header__box">
              <Link className="header__link" to={"/login"}>
                <h2 className="header__box-t">LOG IN</h2>
              </Link>
              <hr className="header__box-hr" />
              <Link className="header__link" to={"/signup"}>
                <h2 className="header__box-t">SIGN UP</h2>
              </Link>
            </div>
          )}
          <div className="header__menu">
            <img
              onClick={toggleDrawer}
              className="header__menu-icon"
              src={hamburger}
              alt=""
            />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="header__menu-drawer"
            >
              {token ? (
                <div className="header__menu-drawer-bottom">
                  <h2 className="header__menu-drawer-bottom-t">
                    Explore Shops
                  </h2>
                  <hr className="header__menu-drawer-bottom-hr" />
                  <h2 className="header__menu-drawer-bottom-t">
                    Submit a brand
                  </h2>
                  <hr className="header__menu-drawer-bottom-hr" />
                  <Link
                    to={"/"}
                    onClick={() => {
                      localStorage.removeItem("token");
                      setToken(null);
                    }}
                    className="header__menu-drawer-bottom-btn"
                  >
                    LOG OUT
                  </Link>
                </div>
              ) : (
                <div className="header__menu-drawer-bottom">
                  <h2 className="header__menu-drawer-bottom-t">
                    Explore Shops
                  </h2>
                  <hr className="header__menu-drawer-bottom-hr" />
                  <h2 className="header__menu-drawer-bottom-t">
                    Submit a brand
                  </h2>
                  <hr className="header__menu-drawer-bottom-hr" />
                  <Link
                    to={"/login"}
                    className="header__menu-drawer-bottom-btn"
                  >
                    LOG IN
                  </Link>
                  <Link
                    to={"/signup"}
                    className="header__menu-drawer-bottom-btn"
                  >
                    SIGN UP
                  </Link>
                </div>
              )}
            </Drawer>
          </div>
        </div>
      </div>
      <hr className="header__hr" />
    </header>
  );
}
