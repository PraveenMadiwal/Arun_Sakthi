import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
// import About from "./pages/About";
import Tools from "./pages/Tools";
// import Skills from "./pages/Skills";
// import Futures from "./pages/Futures";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/tools" element={<Tools />} />
        {/* <Route path="/skills" element={<Skills />} />
        <Route path="/futures" element={<Futures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;