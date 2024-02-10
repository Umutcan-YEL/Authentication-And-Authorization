import { BrowserRouter, Navigate } from "react-router-dom";
import Routes from "./Routes";
import { Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import { StateModel } from "./models/StateModel";
import { useState } from "react";
const { Header } = Layout;
function App() {

  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}

export default App;
