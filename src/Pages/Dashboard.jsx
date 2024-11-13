import React from "react";
import Sidebar from "../components/Sidebar";
import ContentDashboard from "../components/ContentDashboard";

function Dashboard() {
  return (
    <Sidebar
      {...{
        content: <ContentDashboard />,
      }}
    />
  );
}

export default Dashboard;
