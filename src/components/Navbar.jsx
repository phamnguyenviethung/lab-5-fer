/* eslint-disable react/prop-types */
import { Box, Link as ChakraLink, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const routes = [
  {
    value: "Home",
    path: "/",
  },
  {
    value: "News",
    path: "/news",
  },
  {
    value: "Quiz",
    path: "/quiz",
  },
  {
    value: "About",
    path: "/about",
  },
  {
    value: "Contact",
    path: "/contact",
  },
];

const NavItem = ({ path, value }) => {
  return (
    <ChakraLink as={Link} to={path} fontWeight="500">
      {value}
    </ChakraLink>
  );
};

const Navbar = () => {
  return (
    <Flex w="full" h="80px" alignItems="center">
      <Box as={Link} to="/">
        <Text fontSize="2.5rem" color="green.500" fontWeight="500">
          HUNG
        </Text>
      </Box>
      <HStack ml="2">
        {routes.map((r) => {
          return <NavItem key={r.value} {...r} />;
        })}
      </HStack>
    </Flex>
  );
};

export default Navbar;
