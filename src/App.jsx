import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AuthProvider } from "./pages/services/AuthContext";
import PublicRoute from "./components/PublicRoutes";

import AuthPage from "./pages/authscreens/AuthPage";
import RegisterPage from "./pages/RegisterScreen";

import AppLayout from "./components/AppLayout";

import HomePage from "./pages/HomePage";
import DepositScreen from "./pages/DepositScreen";
import WithdrawScreen from "./pages/WithdrawScreen";
import ProfileScreen from "./pages/ProfileScreen";
import VipPage from "./pages/VipPage";
import ViewAllGamesPage from "./pages/GameViewAll";
import AccountStatementScreen from "./pages/TransactionHistry";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          {/* Auth Pages */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* Pages with BottomNav */}
          <Route
            element={
              <PublicRoute>
                <AppLayout />
              </PublicRoute>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/deposit" element={<DepositScreen />} />
            <Route path="/withdraw" element={<WithdrawScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/vip" element={<VipPage />} />
            <Route
              path="/view-all-games"
              element={<ViewAllGamesPage />}
            />
          </Route>

          <Route
            path="/account-statement"
            element={
              <PublicRoute>
                <AccountStatementScreen />
              </PublicRoute>
            }
          />
        

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
