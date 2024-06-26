import { useEffect, useState } from "react";
import staffAPI from "../apis/staffAPI";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link as MUILink,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteDialog from "../components/DeleteDialog";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const run = async () => {
      try {
        const res = await staffAPI.getAll();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };

    run();
  }, []);

  console.log(data);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "full",
        }}
      >
        <Button
          variant="outlined"
          as={Link}
          to="/add"
          sx={{ textDecoration: "none" }}
        >
          Thêm mới
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <Avatar sx={{ witdh: 40, height: 40 }} src={row.avatar} />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <MUILink
                      to={`/staff/${row.id}`}
                      component={Link}
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      <VisibilityIcon />
                    </MUILink>
                    <MUILink
                      component={Link}
                      to={`/staff/${row.id}/edit`}
                      sx={{
                        textDecoration: "none",
                      }}
                    >
                      <EditIcon />
                    </MUILink>
                    <DeleteDialog id={row.id} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
