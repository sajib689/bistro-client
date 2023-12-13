import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefRecommendsCard from "./../ChefRecommendsCard/ChefRecommendsCard";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecommends = data.filter((item) => item.category === "salad");
        setMenu(chefRecommends);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {menu.map((item) => (
          <ChefRecommendsCard key={item._id} item={item}></ChefRecommendsCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
