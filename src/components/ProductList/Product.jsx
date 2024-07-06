/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import getImage from "../../utils/getImg";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <Stack
      flexDirection="column"
      spacing={2}
      textAlign="center"
      justifyContent="space-between"
      sx={{
        fontSize: "1.3rem",
        backgroundColor: grey[200],
        borderRadius: "12px",
        minHeight: "100%",
        userSelect: "none",
        "&:hover": {
          backgroundColor: grey[300],
          borderRadius: "6px",
          transition: "0.15s all",
        },
      }}
      p={2}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box
          component="img"
          src={getImage(data.image)}
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "none",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Stack
        sx={{
          flex: 2,
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box component="h2" color={red[800]} textAlign="center">
          {data.name}
        </Box>
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
        <Button
          component={Link}
          to={`/product/${data.id}`}
          variant="contained"
          color="error"
          width="50%"
        >
          View Detail
        </Button>
      </Stack>
    </Stack>
  );
};

export default Product;
