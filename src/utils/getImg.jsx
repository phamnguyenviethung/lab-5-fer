import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.jpg";
import laptop3 from "../assets/laptop3.png";
import laptop4 from "../assets/laptop4.png";
import laptop5 from "../assets/laptop5.jpg";
import laptop6 from "../assets/laptop6.png";
import laptop7 from "../assets/laptop7.jpg";
import laptop8 from "../assets/laptop8.jpg";
import laptop9 from "../assets/laptop9.png";
import laptop10 from "../assets/laptop10.png";

const data = {
  laptop1,
  laptop2,
  laptop3,
  laptop4,
  laptop5,
  laptop6,
  laptop7,
  laptop8,
  laptop9,
  laptop10,
};

export default function getImage(name) {
  return data[name.split(".")[0]] ?? laptop1;
}
