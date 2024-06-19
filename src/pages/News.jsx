import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
const newLists = [
  {
    id: 1,
    title:
      "Woman bakes expletive-laden pies to get a rise out of her grandmother in annual tradition",
    description:
      "“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.",
  },
  {
    id: 2,
    title:
      "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
    description:
      "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
  },
  {
    id: 3,
    title: "Burger King is testing a new breakfast sandwich",
    description: "This is a win for the flatbread fans.",
  },
  {
    id: 4,
    title: "Popeyes permanently adds chicken wings to its menu",
    description: "And you can get em in five different flavors.",
  },
  {
    id: 5,
    title: "Top salmon with a sizzling mix of aromatics and spices",
    description:
      "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.",
  },
  {
    id: 6,
    title: "80 Christmas dinner ideas for the ultimate holiday feast",
    description:
      "Build the perfect Christmas menu with these delicious recipes.",
  },
  {
    id: 7,
    title: "How to make the easiest prime rib roast for the holidays",
    description:
      "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.",
  },
  {
    id: 8,
    title: "Turn leftover turkey into a flavorful Waldorf salad",
    description:
      "This light, bright turkey salad is the best post-Thanksgiving lunch.",
  },
];
const News = () => {
  return (
    <SimpleGrid columns={[1, 1, 2, 4]}>
      {newLists.map((n) => {
        return (
          <Card maxW="sm" key={n.id}>
            <CardBody>
              <Image
                src="https://picsum.photos/200"
                alt={n.title}
                borderRadius="lg"
                w="full"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{n.title}</Heading>
                <Text>{n.description}</Text>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default News;
