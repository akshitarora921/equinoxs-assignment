import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Chart from "./Components/Chart";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Navbar username="Akshit" designation="Developer" />
        <div className="other-nav">
          <div className="app-card">
            <Card title="budget" data="$24,000" />
            <Card title="Total User" data="1600" />
            <Card title="Task Progerss" data="75%" progressValue="75" />
            <Card title="Total Profit" data="$23,200" active={true} />
          </div>
          <div className="app-chart">
            <Chart />
          </div>
        </div>
      </div>

      {/* allother */}
      {/* 4*cards */}
      {/* 2*graphs */}
      {/* 2*table */}
    </div>
  );
}

export default App;
