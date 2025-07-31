import { TypeAnimation } from "react-type-animation";

const BannerAnimation = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Amir Hamza Ismail",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "MERN Stack Developer",
          1000,
          "Backend Developer",
          1000,
          "Frontend Developer",
          1000,
          "Fulstack Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default BannerAnimation;
