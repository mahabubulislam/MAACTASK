import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import CreateRegion from "./Pages/Dashboard/Region/CreateRegion";
import EmptyRegion from "./Pages/Dashboard/Region/EmptyRegion";
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
          <Route index path="region" element={<EmptyRegion/>}></Route>
          <Route path="create-region" element={<CreateRegion/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
