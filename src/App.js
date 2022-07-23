import { Route, Routes } from "react-router-dom";
import AreaList from "./Pages/Dashboard/Area/AreaList";
import CreateArea from "./Pages/Dashboard/Area/CreateArea";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import CreateRegion from "./Pages/Dashboard/Region/CreateRegion";
import RegionList from "./Pages/Dashboard/Region/RegionList";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import RequirAuth from "./Pages/RequireAuth/RequirAuth";
import SignIn from "./Pages/SignIn/SignIn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<RequirAuth><Dashboard /></RequirAuth>}>
          <Route index element={<RequirAuth><AreaList /></RequirAuth>}></Route>
          <Route path="area-list" element={<RequirAuth><AreaList /></RequirAuth>}></Route>
          <Route path="create-area" element={<RequirAuth><CreateArea /></RequirAuth>}></Route>
          <Route path="area-list/create-area" element={<RequirAuth><CreateArea /></RequirAuth>}></Route>
          <Route path="region-list" element={<RequirAuth><RegionList /></RequirAuth>}></Route>
          <Route path="create-region" element={<RequirAuth><CreateRegion /></RequirAuth>}></Route>
          <Route path="region-list/create-region" element={<RequirAuth><CreateRegion /></RequirAuth>}></Route>
          <Route path="area-list/create-region" element={<RequirAuth><CreateRegion /></RequirAuth>}></Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
