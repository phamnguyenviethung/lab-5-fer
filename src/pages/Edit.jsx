import { Box } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../redux/productAPI";

const Edit = () => {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetProductDetailQuery(id);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Có lỗi xảy ra</p>;
  if (!data) return <p>Không có dữ liệu</p>;
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box component="h1" textAlign="center" mb={4}>
        Sửa sản phẩm
      </Box>
      <ProductForm productData={data} refetchProductData={refetch} />
      <ProductTable />
    </Box>
  );
};

export default Edit;
