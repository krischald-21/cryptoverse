import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            {/* Routes */}
            <Routes>
              <Route path="/" exact component={Homepage} />
              <Route path="/exchanges" exact component={Exchanges} />
              <Route
                path="/cryptocurrencies"
                exact
                component={Cryptocurrencies}
              />
              <Route path="/crypto/:coinId" exact component={CryptoDetails} />
              <Route path="/news" exact component={News} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
