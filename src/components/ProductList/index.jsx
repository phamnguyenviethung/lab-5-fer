import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const { data, isLoading, isError } = useSelector((state) => state.product);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Có lỗi xảy ra...</p>;
  if (data.length === 0) return <p>Không tìm thấy dữ liệu</p>;

  return (
    <Grid container spacing={2}>
      {data.map((product) => {
        return (
          <Grid item key={product.id} xs={12} md={6} lg={4}>
            <Product data={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
