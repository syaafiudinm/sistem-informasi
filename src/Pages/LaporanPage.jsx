import React from "react";
import Sidebar from "../components/Sidebar";
import TabelLaporan from "../components/TabelLaporan";

function LaporanPage() {
  return (
    <div>
      <Sidebar {...{ content: <TabelLaporan /> }} />
    </div>
  );
}

export default LaporanPage;
