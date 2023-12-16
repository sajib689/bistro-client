import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mt-12 mb-24'>
        {
          item.map(items => <FoodCard items={items} key={items._id}></FoodCard>)
        }
       </div>
    );
};

export default OrderTab;