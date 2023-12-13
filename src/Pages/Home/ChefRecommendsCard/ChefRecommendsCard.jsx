const ChefRecommendsCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn hover:bg-black uppercase text-orange-500">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendsCard;
