const Cover = ({ img, title, description }) => {
  return (
    <section>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-[rgba(21, 21, 21, 0.60)]">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
