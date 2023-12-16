import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "./../../../hooks/useMenu/useMenu";
import OrderTab from "../OrderTab/OrderTab";

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
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
