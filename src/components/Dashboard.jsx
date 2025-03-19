import React from "react";
import { Card, Col, Row, Statistic, Table } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined, ShoppingCartOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/charts";

const Dashboard = () => {
  // Dummy Data for Sales Chart
  const data = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 15000 },
    { month: "Mar", sales: 18000 },
    { month: "Apr", sales: 17000 },
    { month: "May", sales: 22000 },
    { month: "Jun", sales: 26000 },
  ];

  const config = {
    data,
    xField: "month",
    yField: "sales",
    smooth: true,
    point: { size: 5, shape: "circle" },
    color: "#1890ff",
  };

  // Dummy Table Data
  const columns = [
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    { title: "Customer", dataIndex: "customer", key: "customer" },
    { title: "Amount ($)", dataIndex: "amount", key: "amount" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const dataSource = [
    { key: "1", orderId: "1001", customer: "John Doe", amount: 120, status: "Completed" },
    { key: "2", orderId: "1002", customer: "Jane Smith", amount: 250, status: "Pending" },
    { key: "3", orderId: "1003", customer: "Michael Lee", amount: 90, status: "Shipped" },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Dashboard</h2>

      {/* Statistics Cards */}
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Total Sales"
              value={12500}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<DollarOutlined />}
              suffix="$"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="New Customers"
              value={150}
              valueStyle={{ color: "#1890ff" }}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Orders"
              value={320}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Revenue Growth"
              value={8.5}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      {/* Sales Chart */}
      <Card style={{ marginTop: "24px" }} title="Sales Overview">
        <Line {...config} />
      </Card>

      {/* Recent Orders Table */}
      <Card style={{ marginTop: "24px" }} title="Recent Orders">
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Card>
    </div>
  );
};

export default Dashboard;
