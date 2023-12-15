import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
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
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>

    <MenuCategory items={offered}></MenuCategory>
    </div>
  );
};

export default Menu;
