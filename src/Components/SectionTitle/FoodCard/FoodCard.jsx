const FoodCard = ({items}) => {
  console.log(items)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={items.image}
          alt="food"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{items.name}</h2>
        <p>{items.recipe}</p>
        <div className="card-actions justify-center">
        <button className="btn hover:bg-black uppercase text-orange-500">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
