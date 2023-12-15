import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img,description }) => {
  return (
    <div className="mt-24">
        {title && <Cover img={img} title={title} description={description}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-12 mt-24">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
