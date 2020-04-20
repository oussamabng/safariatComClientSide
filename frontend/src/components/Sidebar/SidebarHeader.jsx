import React from "react";
import { List } from "semantic-ui-react";
import "./Sidebar.css";
import SearchInput from "../SearchInput/SearchInput.jsx";

const SidebarHeader = (props) => {
  const { visible } = props;
  return (
    <div className={visible ? "_sidebar active" : "_sidebar"}>
      <List className="_sidebar_list">
        <List.Item>
          <SearchInput />
        </List.Item>
        <List.Item>
          <a href="/" className="medium-text default-color active-txt">
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
      <div className="flex _margin_vertical">
        <a
          href="/login"
          className="_login_button _margin_horizontal  _button shadow medium-text border-radius-bg"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default SidebarHeader;
