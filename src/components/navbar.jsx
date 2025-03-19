import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="products">
        <Link to="/product-details">Product Details</Link>
      </Menu.Item>
      <Menu.Item key="compare">
        <Link to="/compare-products">Compare Products</Link>
      </Menu.Item>
      <Menu.Item key="dashboard">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="opportunities">
        <Link to="/opportunities">Opportunities</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
