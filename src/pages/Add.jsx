import { Box } from "@mui/material";
import StaffInfoForm from "../components/StaffInfoForm";

const Add = () => {
  return (
    <Box>
      <Box mb={4} as="h4">
        Update staff
      </Box>
      <StaffInfoForm />
    </Box>
  );
};

export default Add;
