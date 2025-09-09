import { FaSchool } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../Data/experiences";
import HeaderTitle from "./HeaderTitle";

const EducationTimeline = () => {
  return (
    <div>
      <div>
        <HeaderTitle
          title="Academic Background"
          subTitle="Schools, colleges, and universities that shaped my career"
        />
      </div>
      <div>
        <VerticalTimeline lineColor="blue">
          {experiences?.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={`${experience.startDate} - ${experience.endDate}`}
              shadow-lg
              dateClassName=" text-blue-500 font-bold"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.location}
              </h4>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EducationTimeline;
