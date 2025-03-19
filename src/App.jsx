import React, { useState } from "react";
import { Image } from "antd";
import logo from "./assets/logo.png";
import Navbar from "./components/Navbar"; 

import {
  UserOutlined,
  BarChartOutlined,
  ContactsOutlined,
  ShoppingOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Product Details", "1", <UserOutlined />),
  getItem("Compare Products", "2", <BarChartOutlined />),
  getItem("Dashboard", "3", <ProductOutlined />),
  getItem("Opportunities", "4", <ShoppingOutlined />),
  getItem("Contact Us", "5", <ContactsOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Add Navbar Here */}
      <Header style={{ padding: 0, background: "#fff" }}>
        <Navbar />
      </Header>

      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" style={{ textAlign: "center", padding: "10px" }}>
            <Image width={collapsed ? 40 : 150} src={logo} preview={false} />
          </div>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
