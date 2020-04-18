import React, { useState } from "react";
import "./Header.css";
import { Container, List, Button } from "semantic-ui-react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

const Header = (props) => {
  return (
    <header className="_header_all">
      <Container>
        <div className="_header_nav">
          <List className="_header_list" horizontal>
            <List.Item>
              <Logo />
            </List.Item>
            <List.Item>
              <a href="/" className="medium-text default-color">
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
              <a href="/toursNdProducts" className="medium-text default-color">
                Tours & Products
              </a>
            </List.Item>
            <List.Item>
              <a href="/shop" className="medium-text default-color">
                Shop
              </a>
            </List.Item>
            <List.Item>
              <a href="/contact" className="medium-text default-color">
                Contact
              </a>
            </List.Item>
          </List>
          <div className="_header_right_part">
            <div className="_margin_horizontal _header_right_part">
              <Search />
            </div>
            <a
              href="/login"
              className="_login_button  _button shadow medium-text border-radius-bg"
            >
              Login
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
