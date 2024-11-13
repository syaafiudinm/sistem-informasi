import React from "react";
import Sidebar from "../components/Sidebar";
import ContentRoute from "../components/ContentRoute";

function RoutePage() {
  return <Sidebar {...{ content: <ContentRoute /> }} />;
}

export default RoutePage;
