import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Image, Layout, Menu, theme } from "antd";
import {
  UserOutlined,
  BarChartOutlined,
  ContactsOutlined,
  ShoppingOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import logo from "./assets/logo.png";
import Navbar from "./components/Navbar";
import ProductTable from "./components/ProductTable";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"; 
// import Opportunities from "./components/Opportunities";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Navbar with Home Link */}
        <Header style={{ padding: 0, background: "#fff" }}>
          <Navbar />
        </Header>

        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" style={{ textAlign: "center", padding: "10px" }}>
              <Image width={collapsed ? 40 : 150} src={logo} preview={false} />
            </div>

            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/product-details">Product Details</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<BarChartOutlined />}>
                <Link to="/compare-products">Compare Products</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ProductOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<ShoppingOutlined />}>
                <Link to="/opportunities">Opportunities</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<ContactsOutlined />}>
                <Link to="/contact">Contact Us</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ padding: "24px" }}>
            <Content
              style={{
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-details" element={<ProductTable />} />
                <Route path="/compare-products" element={<h2>Compare Products Page</h2>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/opportunities" element={<h2>Opportunities Page</h2>} />
                <Route path="/contact" element={<h2>Contact Us Page</h2>} />
                

              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
