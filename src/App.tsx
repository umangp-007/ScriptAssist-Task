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

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Header />
              <ResourceListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources/:id"
          element={
            <PrivateRoute>
              <Header />
              <ResourceDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <Header />
              <AboutPage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/ships"
          element={
            <PrivateRoute>
              <Header />
              <ShipsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Header />
              <NotFoundPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
