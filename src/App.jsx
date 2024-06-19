import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Container maxW="container.xl" minH="100vh">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Quiz />} path="/quiz" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Container>
  );
}

export default App;
