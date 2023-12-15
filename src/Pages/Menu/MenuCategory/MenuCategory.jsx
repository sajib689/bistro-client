import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
