import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import DashboardHome from "./pages/dashboard/Home";
import AddProduct from "./pages/dashboard/AddProduct";
import Enquiries from "./pages/dashboard/Enquiries";
import AdminLaunchVideo from "./pages/dashboard/AdminLaunchVideo";

import ProtectedRoute from "./routes/ProtectedRoute";
import CategoryProducts from "./pages/CategoryProducts";
import Products from "./pages/dashboard/Products";

function App() {
  return (
    <>
      <Header />

      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/category/:category" element={<CategoryProducts />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route element={<ProtectedRoute allowedRoles={["ROLE_ADMIN"]} />}>

          <Route path="/dashboard" element={<Dashboard />}>

            {/* ✅ DEFAULT DASHBOARD PAGE */}
            <Route index element={<Navigate to="dashboardhome" replace />} />

            <Route path="dashboardhome" element={<DashboardHome />} />
            <Route path="add-product" element={<AddProduct />} />
             <Route path="products" element={<Products />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="launch-video" element={<AdminLaunchVideo />} />

          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;