/* eslint-disable react/prop-types */
import { Avatar, Box, Stack } from "@mui/material";
import dayjs from "dayjs";

const StaffCard = ({ data }) => {
  if (!data) return <p>Khong co du lieu</p>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        width={{
          xs: "100%",
          md: "30%",
        }}
        p={2}
        direction={"column"}
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <Box
          flex="1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={data.avatar}
            sx={{
              height: 150,
              width: 150,
            }}
          />
        </Box>
        <Box flex="2" textAlign="center" fontSize="1.5rem">
          <Box as="p">{data.id}</Box>
          <Box as="p" fontWeight={600} color="primary.main">
            {data.name}
          </Box>
          <Box as="p">{data.age}</Box>
          <Box as="p">{data.address}</Box>
          <Box as="p">{dayjs(data.createdAt).format("DD/MM/YYYY")}</Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default StaffCard;
