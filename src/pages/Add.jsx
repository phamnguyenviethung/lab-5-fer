import { Box } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";

const Add = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box component="h1" textAlign="center" mb={4}>
        Thêm sản phẩm
      </Box>
      <ProductForm />
      <ProductTable />
    </Box>
  );
};

export default Add;
