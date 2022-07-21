import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Register from "./Pages/Register/Register";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
       
        </Route>
      </Routes>
    </div>
  );
}

export default App;
