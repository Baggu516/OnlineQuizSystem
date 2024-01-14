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
import Results from "./components/admins/Results";
// ...............
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {/* <Results></Results> */}
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
            path="/resultspage"
            element={
              <PrivateRoute>
                <Results />
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
            path="quiz/instructions/:id"
            element={
              <PrivateRoute>
                <Instructions isModal={false} />
              </PrivateRoute>
            }
          />
          <Route path="submit" element={
             <PrivateRoute>
                  <SubmitComponent />
             </PrivateRoute>
         } />
          <Route path="answers" element={<PrivateRoute>
            <AnswersAndResponeses />
          </PrivateRoute>} />
          <Route path="quiz/:id" element={<PrivateRoute>
            <Quiz />
          </PrivateRoute>} />
          <Route path="modal2" element={<PrivateRoute>
            <PracticeModal2 />
          </PrivateRoute>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
