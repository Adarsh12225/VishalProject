import React, { useEffect, useState } from "react";
import { Table } from "antd";

const ProductTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json.products))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Get unique categories for filtering dropdown
  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price, // Sort by price
    },
    {
      title: "Discount (%)",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage, // Sort by discount
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: uniqueCategories.map((category) => ({
        text: category,
        value: category,
      })), // Dynamically generate filter options
      onFilter: (value, record) => record.category === value,
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => (
        <img src={thumbnail} alt="Product" style={{ width: 50, height: 50 }} />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default ProductTable;
