import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/dashboard/Home";
import AddProduct from "./pages/dashboard/AddProduct";
import Enquiries from "./pages/dashboard/Enquiries";

import ProtectedRoute from "./routes/ProtectedRoute";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  return (
    <>
      <Header />

      <Routes>

        {/* ONLY HOME PAGE */}
        <Route path="/" element={<Home />} />
        <Route path="/products/category/:category" element={<CategoryProducts />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD */}
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="dashboardhome" element={<DashboardHome />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="enquiries" element={<Enquiries />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;