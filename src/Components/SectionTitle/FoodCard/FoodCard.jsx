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
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{items.price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{items.name}</h2>
        <p>{items.recipe}</p>
        <div className="card-actions justify-start">
        <button className="btn hover:bg-black uppercase text-orange-500">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
