import { Box, Image, Stack, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://cdn.dribbble.com/userupload/14797676/file/original-129fad249898ac8f2bf3e2f60f0cefb2.png?resize=752x564",
    thumbnail:
      "https://cdn.dribbble.com/userupload/14797676/file/original-129fad249898ac8f2bf3e2f60f0cefb2.png?resize=752x564",
  },
  {
    original:
      "https://cdn.dribbble.com/userupload/15039460/file/original-e5b70039104302db9ab5d1bb67e55d14.png?resize=752x564",
    thumbnail:
      "https://cdn.dribbble.com/userupload/15039460/file/original-e5b70039104302db9ab5d1bb67e55d14.png?resize=752x564",
  },
  {
    original:
      "https://cdn.dribbble.com/userupload/14276660/file/original-80fb2545978cf74d31cf98ef7ddb16cd.png?resize=752x564",
    thumbnail:
      "https://cdn.dribbble.com/userupload/14276660/file/original-80fb2545978cf74d31cf98ef7ddb16cd.png?resize=752x564",
  },
];

const cate = [
  "https://cdn.dribbble.com/userupload/14276662/file/original-83c1a5d90a61c539c011de818dab9141.png?resize=752x564&vertical=center",
  "https://cdn.dribbble.com/userupload/14276661/file/original-363e04a2413df4499b6c716ae9b244c8.png?resize=752x564&vertical=center",
  "https://cdn.dribbble.com/userupload/14276663/file/original-654e71de77bd36c0073957c3f7cf8a56.png?resize=752x564&vertical=center",
  "https://cdn.dribbble.com/userupload/14276665/file/original-f948515a90fce656b8be018dcc3cf755.png?resize=752x564&vertical=center",
];

const Home = () => {
  return (
    <Box>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showThumbnails={false}
        showIndex
      />
      <Stack
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        w="full"
        my={8}
        justifyContent="center"
        alignItems="center"
      >
        {cate.map((img) => {
          return (
            <Image boxSize="300px" borderRadius="50%" src={img} key={img} />
          );
        })}
      </Stack>
      <Text fontSize="4rem" my="2" color="green.400">
        This is homepage
      </Text>
    </Box>
  );
};

export default Home;
