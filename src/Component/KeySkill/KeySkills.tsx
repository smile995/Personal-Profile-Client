import Marquee from "react-fast-marquee";
import Container from "../ReusableComps/Container";
import HeaderTitle from "../ReusableComps/HeaderTitle";
import { keySkills } from "../../Data/skills";


const KeySkills = () => {

  return (
    <Container>
      <div>
        <HeaderTitle
          title="Core Technical Skills"
          subTitle="Highlighting the main skills that drive my projects and solutions.
               make it more professional"
        />
      </div>
      <div>
        <Marquee direction="right" speed={50} pauseOnHover gradient={false}>
          <div className="flex md:gap-10 gap-5 items-center px-4">
            {keySkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center min-w-[100px]"
              >
                {skill.icon}
                <span className="mt-1 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
       
      </div>
    </Container>
  );
};

export default KeySkills;
