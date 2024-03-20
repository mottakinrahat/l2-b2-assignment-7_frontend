import { Link, NavLink, Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PicLeftOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, MenuProps } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;
const items: MenuProps["items"] = [
  {
    key: "winter-clothes",
    icon: <UserOutlined />,
    label: <NavLink to="/dashboard/winter-clothes">Winter-clothes</NavLink>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: "4",
    icon: <PicLeftOutlined />,
    label: (
      <NavLink to="/dashboard/create-testimonial">Create Testimonial</NavLink>
    ),
  },
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout className="h-">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              maxHeight: screenY,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Link to="create-winter-clothes">
              {" "}
              <Button className="bg-[#D7E826] text-black">Add Clothes</Button>
            </Link>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
