const HeaderTitle = ({titleStart,titleColor, subTitle}:{titleStart:string,titleColor:string, subTitle:string}) => {
  return (
    <div className="md:w-1/2 w-full mx-auto ">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-6">
      {titleStart} <span className="text-blue-600">{titleColor}</span>{" "}
      </h1>
      <p className="text-center text-gray-600 mb-10">
      {subTitle}
      </p>
    </div>
  );
};

export default HeaderTitle;
