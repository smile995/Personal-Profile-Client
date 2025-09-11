
import "aos/dist/aos.css";
const HeaderTitle = ({
  
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1200" className="md:w-1/2 lg:w-1/3  rounded-full w-full mx-auto border-b-4 border-gray-200 border-dashed mb-3 md:mb-6 ">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-2.5">
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          {title}
        </span>
      </h1>

      <p className="text-center text-gray-600 mb-2.5">{subTitle}</p>
    </div>
  );
};

export default HeaderTitle;
