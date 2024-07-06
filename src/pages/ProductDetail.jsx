import { Box, Button, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { grey, red } from "@mui/material/colors";
import { useGetProductDetailQuery } from "../redux/productAPI";
import getImage from "../utils/getImg";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductDetailQuery(id);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Có lỗi xảy ra</p>;
  if (!data) return <p>Không có dữ liệu</p>;
  return (
    <>
      <Box component="h1" textAlign="center" mb={6}>
        Chi tiết sản phẩm
      </Box>
      <Stack
        sx={{
          width: "100%",
          alignItems: "center",
          backgroundColor: grey[200],
          padding: 2,
          borderRadius: "10px",
        }}
      >
        <Box
          component="h1"
          sx={{
            textAlign: "center",
            color: grey[900],
          }}
        >
          {data.name}
        </Box>
        <Box
          component="img"
          src={getImage(data.image)}
          sx={{
            height: "400px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
        <Box component="p" fontSize="1rem" color={grey[900]}>
          {data.description}
        </Box>
        <Box component="s" fontSize="1rem" color={grey[900]}>
          {data.price}
        </Box>
        <Box
          component="p"
          sx={{ fontSize: "1.5rem", color: red[400], fontWeight: 600 }}
        >
          {data.currentPrice}
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to={`/`}
            variant="contained"
            color="primary"
            width="50%"
          >
            Back home
          </Button>
          <Button
            component={Link}
            to={`/product/edit/${data.id}`}
            variant="contained"
            color="error"
            width="50%"
          >
            Edit
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductDetail;
