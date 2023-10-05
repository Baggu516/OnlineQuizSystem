
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
          <Route index element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
