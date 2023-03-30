import { React } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import PostalLookup from "./routes/postal-lookup/postal-lookup.component";
import Universities from "./routes/universities/universities.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="universities" element={<Universities />} />
        <Route path="postal-lookup" element={<PostalLookup />} />
      </Route>
    </Routes>
  );
}

export default App;
