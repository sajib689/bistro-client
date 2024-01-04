const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center mb-24 mt-24 md:w-4/12">
      <p className="text-[#D99904] text-[16px]">{subHeading}</p>
      <p className="text-[#151515] text-3xl uppercase border-y-4 py-4">{heading}</p>
    </div>
  );
};

export default SectionTitle;
