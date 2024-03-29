import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();
  return (
    <div className="app bg-gray-900 text-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
