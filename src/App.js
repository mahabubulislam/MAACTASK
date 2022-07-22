import { Route, Routes } from "react-router-dom";
import AreaList from "./Pages/Dashboard/Area/AreaList";
import CreateArea from "./Pages/Dashboard/Area/CreateArea";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import EmptyData from "./Pages/Dashboard/Dashboard/EmptyData";
import CreateRegion from "./Pages/Dashboard/Region/CreateRegion";
import RegionList from "./Pages/Dashboard/Region/RegionList";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<AreaList/>}></Route>
          <Route path="create-area" element={<CreateArea/>}></Route>
          <Route path="area/create-area" element={<CreateArea/>}></Route>
          <Route path="region-list" element={<RegionList/>}></Route>
          <Route path="create-region" element={<CreateRegion/>}></Route>
          <Route path="region/create-region" element={<CreateRegion/>}></Route>
          <Route path="area/create-region" element={<CreateRegion/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
