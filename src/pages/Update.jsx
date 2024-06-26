import { useEffect, useState } from "react";
import staffAPI from "../apis/staffAPI";
import { Box } from "@mui/material";
import StaffInfoForm from "../components/StaffInfoForm";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const Update = () => {
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
      <Box mb={4} as="h4">
        Update staff
      </Box>
      {data && (
        <StaffInfoForm
          staffData={{ ...data, createdAt: dayjs(data.createdAt) }}
          id={id}
        />
      )}
    </Box>
  );
};

export default Update;
