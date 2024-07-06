import { Box } from "@mui/material";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box component="h1" textAlign="center" mb={4}>
        Danh sách sản phẩm
      </Box>
      <ProductList />
    </Box>
  );
};

export default Home;
