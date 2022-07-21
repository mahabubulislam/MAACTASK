import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
