import { useParams } from "react-router-dom";
import staffAPI from "../apis/staffAPI";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import StaffCard from "../components/StaffCard";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const run = async () => {
      try {
        if (id) {
          const res = await staffAPI.getOne(id);
          setData(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    run();
  }, [id]);

  return (
    <Box>
      <StaffCard data={data} />
    </Box>
  );
};

export default Details;
