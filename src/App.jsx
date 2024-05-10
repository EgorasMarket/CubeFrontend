import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Index";
import DashboardHome from "./App/DashboardHome";
function App() {
  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");

  return (
    <div className="App">
      {myArr[1] === "app" ? null : <Header />}
      {myArr[1] === "app" ? (
        <DashboardHome />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
      {myArr[1] === "event" ? null : <Footer />}
    </div>
  );
}

export default App;
