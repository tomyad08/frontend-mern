import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddData from "./Pages/addData";
import EditData from "./Pages/editData";
import Login from "./Components/login";
import ProtectedRoute from "./Components/ProtectedRoutes";
import Register from "./Components/register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit" element={<EditData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
