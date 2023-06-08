import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddData from "./Pages/addData";
import EditData from "./Pages/editData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
