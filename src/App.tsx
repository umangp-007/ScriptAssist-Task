import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./components/AuthProvider/AuthProvider";
import LoginPage from "./pages/Login/LoginPage";
import ResourceListPage from "./pages/ResourceListPage/ResourceListPage";
import ResourceDetailPage from "./pages/ResourceDetailPage/ResourceDetailPage";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ShipsPage from "./pages/Ships/Ships";
import AboutPage from "./pages/About/About";
import Footer from "./components/Footer/Footer";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <ResourceListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources/:id"
          element={
            <PrivateRoute>
              <ResourceDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ships"
          element={
            <PrivateRoute>
              <ShipsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFoundPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
