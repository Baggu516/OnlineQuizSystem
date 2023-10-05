import { useContext } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Index from "./components/Index";
import Error from "./components/Error";
import RedirectRoute from "./utils/RedirectRoute";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RedirectRoute>
                <LoginForm />
              </RedirectRoute>
            }
          />
          <Route
            path="register"
            element={
              <RedirectRoute>
                <RegistrationForm />
              </RedirectRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
