import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import staffAPI from "../apis/staffAPI";
import StaffCard from "../components/StaffCard";
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

  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((staff) => {
          return (
            <Grid key={staff.id} item xs={6} md={6}>
              <StaffCard data={staff} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
