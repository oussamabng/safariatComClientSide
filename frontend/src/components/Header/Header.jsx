import React, { useState } from "react";
import { Container, List } from "semantic-ui-react";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as MiniDots } from "../../assets/icons/miniDots.svg";
import { ReactComponent as Toggle } from "../../assets/icons/toggle.svg";
import SearchInput from "../SearchInput/SearchInput.jsx";
import "./Header.css";

const Header = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const { active } = props; //? the active element in the navs

  const handleSearch = () => {
    setIsSearch((prevState) => !prevState);
  };
  return (
    <header className="_header_container">
      <Container>
        <div className="_header">
          <Logo className="_logo" />
          <List className="_header_list" horizontal>
            <List.Item>
              <a
                href="/"
                className={
                  active === "home"
                    ? "medium-text default-color active-txt"
                    : "medium-text default-color"
                }
              >
                Home
              </a>
            </List.Item>
            <List.Item>
              <a href="/services" className="medium-text default-color">
                Services
              </a>
            </List.Item>
            <List.Item>
              <a href="/blog" className="medium-text default-color">
                blog
              </a>
            </List.Item>
            <List.Item>
              <a
                href="/tours"
                className={
                  active === "tours"
                    ? "medium-text default-color active-txt"
                    : "medium-text default-color"
                }
              >
                Tours
              </a>
            </List.Item>
            <List.Item
              className={isSearch ? "_header_right_part _header_search" : ""}
            >
              <a
                href="/shop"
                className={
                  active === "shop"
                    ? "medium-text default-color active-txt"
                    : "medium-text default-color"
                }
              >
                Shop
              </a>
            </List.Item>
            <List.Item
              className={isSearch ? "_header_right_part _header_search" : ""}
            >
              <a href="/contact" className="medium-text default-color">
                Contact
              </a>
            </List.Item>
            <div
              className={
                !isSearch
                  ? "_header_right_part _header_search"
                  : "no_margin flex _header_search"
              }
            >
              <MiniDots className="pointer" onClick={handleSearch} />
            </div>
          </List>
          <div className="_header_right_part">
            <div
              className={
                !isSearch
                  ? "_header_right_part"
                  : "_header_right_part _header_search"
              }
            >
              <Search className="pointer" onClick={handleSearch} />
            </div>
            <div
              className={
                !isSearch
                  ? "_header_right_part _header_search"
                  : "_header_right_part"
              }
            >
              <SearchInput />
            </div>
            <a
              href="/login"
              className="_login_button _margin_horizontal  _button shadow medium-text border-radius-bg"
            >
              Login
            </a>
          </div>
          <div className="_header_toggle">
            <Toggle onClick={props.show} />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
