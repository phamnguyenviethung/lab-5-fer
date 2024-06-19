import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box fontSize="1.5rem" fontWeight="400">
      <Heading as="h2">About me</Heading>
      <Text color="green.600">Pham Nguyen Viet Hung - SE183199</Text>
      <Text>Major: Software Engineer</Text>
      <Text>FPTU HCM Campus</Text>
    </Box>
  );
};

export default About;
