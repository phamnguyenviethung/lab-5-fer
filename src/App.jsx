import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { updateData } from "./redux/productSlice";
import { useGetAllProductQuery } from "./redux/productAPI";
import { useEffect } from "react";
import ProductDetail from "./pages/ProductDetail";
import Add from "./pages/Add";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
function App() {
  const { data, isLoading, isError } = useGetAllProductQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateData({ data, isLoading, isError }));
  }, [data, dispatch, isLoading, isError]);
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add" element={<Add />} />
        <Route path="/product/edit/:id" element={<Edit />} />
      </Routes>
    </Container>
  );
}

export default App;
