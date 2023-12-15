import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import dessert from '../../../assets/menu/dessert-bg.jpeg';
import salad from '../../../assets/menu/salad-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
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
      {/* main cover */}
      <Cover
        img={img}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* section title */}
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
    {/* offered section */}
    <MenuCategory items={offered}></MenuCategory>
  
    {/* desserts menu items section */}
    <MenuCategory items={desserts}  img={dessert}
        title={"DESSERTS"}
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
