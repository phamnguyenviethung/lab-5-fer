import { Box, Stack, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        height: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box flex="1">
        <Box
          to="/"
          component={Link}
          sx={{
            fontSize: "2rem",
            textDecoration: "none",
            color: "primary.main",
            fontWeight: 700,
          }}
        >
          LAPTOP
        </Box>
      </Box>
      <Stack flex="2" direction="row" spacing={2}>
        <MUILink to="/" component={Link} sx={{ textDecoration: "none" }}>
          Home
        </MUILink>
        <MUILink to="/add" component={Link} sx={{ textDecoration: "none" }}>
          Add new
        </MUILink>
      </Stack>
    </Box>
  );
};

export default Navbar;
