import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Update from "./pages/Update";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Add from "./pages/Add";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Add />} path="/add" />
        <Route element={<Details />} path="/staff/:id" />
        <Route element={<Update />} path="/staff/:id/edit" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Container>
  );
}

export default App;
