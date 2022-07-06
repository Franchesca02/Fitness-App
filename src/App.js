import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@material-ui/core";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
};

export default App;
