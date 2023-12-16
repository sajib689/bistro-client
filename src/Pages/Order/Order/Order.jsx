import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "./../../../hooks/useMenu/useMenu";
import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>
      <Cover
        img={shopImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* tabs section */}
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="tabs tabs-boxed mt-24"
      >
        <TabList className="uppercase">
          <Tab className="tab">Salad</Tab>
          <Tab className="tab">pizza</Tab>
          <Tab className="tab">soups</Tab>
          <Tab className="tab">desserts</Tab>
          <Tab className="tab">drinks</Tab>
        </TabList>

        <TabPanel>
         <div className='grid md:grid-cols-3 gap-4 mt-12 mb-24'>
          {
            salad.map(items => <FoodCard items={salad} key={items._id}></FoodCard>)
          }
         </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
