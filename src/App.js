import { Layout, Menu } from "antd";
import { ACTIVE_NETWORK, APP_NAME } from "./util/constants";

import { Routes, Route, Link, Router } from "react-router-dom";
import UploadPage from "./components/UploadPage";

import logo from "./assets/logo.png";
import "antd/dist/antd.min.css";
import "./App.css";
import About from "./components/About";
// import Main from "./main.tsx";
// import { MainRecorder}  from "./@UI/MainRecorder.tsx";
import Apps from './main.tsx'
import {PlayVsStockfish} from "./pages/ai.tsx";
import Discover from "./components/Discover";
import ConnectButton from "./components/ConnectButton";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Menu theme="gray" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Link to="/">
              <Menu.Item key="0">
                <img src={logo} className="header-image" />
              </Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item key="1">Home</Menu.Item>
            </Link>
            <Link to="/sell">
              <Menu.Item key="2">Sell Content</Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item key="3">About</Menu.Item>
            </Link>
            <Link to="/game">
              <Menu.Item key="3">Try Theta BoardGames</Menu.Item>
            </Link>
            <ConnectButton />
          </Menu>
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<About/>}/>
              <Route exact path="/sell" element={<UploadPage />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/game" element={<PlayVsStockfish />} />
              <Route path="/:address" element={<Discover />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          {APP_NAME} &copy;2024 - Built for the{" "}
          <a href="https://theta2024.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open" target="_blank" rel="noreferrer">
            Theta Network 2024 Hackathon
          </a>
          . Active Network: {ACTIVE_NETWORK.name}
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
