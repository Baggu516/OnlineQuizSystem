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
import Quiz from "./components/Quiz";
import Instructions from "./components/Instructions";
import PracticeModal2 from "./components/PracticeModal2";
// .........
import SubmitComponent from "./components/SubmitComponent";
import AnswersAndResponeses from "./components/AnswersAndResponeses";

// ...............
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      
      <BrowserRouter>
        {/* <Quiz/> */}
        {/* <SubmitComponent/> */}
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
          <Route
            path="instructions"
            element={
              <PrivateRoute>
                <Instructions isModal={false} />
              </PrivateRoute>
            }
          />
           <Route path="submit" element={<SubmitComponent />} />
          <Route path="answers" element={<AnswersAndResponeses />} />
          <Route path="quiz/:id" element={<Quiz />} />
          <Route path="modal2" element={<PracticeModal2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
