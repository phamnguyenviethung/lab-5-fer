import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useSelector } from "react-redux";
import DeleteProductButton from "./DeleteProductButton";

const ProductTable = () => {
  const productState = useSelector((state) => state.product);
  return (
    <Box my={6}>
      <Box component="h4" color={blue[200]}>
        Thông tin các sản phẩm
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productState?.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <s>{row.price}</s>
                </TableCell>
                <TableCell>{row.currentPrice}</TableCell>
                <TableCell>
                  <DeleteProductButton id={row.id} name={row.name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
