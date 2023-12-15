import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import PopularMenu from "./../../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={img}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
