import { FaGraduationCap } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HeaderTitle from "./HeaderTitle";
import { Educations } from "../../Data/education";

const EducationTimeline = () => {
  return (
    <div>
      <HeaderTitle
        title="Academic Background"
        subTitle="My journey through schools, colleges, and universities"
      />

    <VerticalTimeline lineColor="#2563EB">
  {Educations?.map((education) => (
    <VerticalTimelineElement
      key={education._id}
      className="vertical-timeline-element--education"
      contentStyle={{
        background: "linear-gradient(135deg, #E0F2FE, #F8FAFC)",
        color: "#1E293B",
        boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
        borderRadius: "16px",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #2563EB" }}
      date={`${education.startDate} - ${education.endDate}`}
      dateClassName="text-blue-600 font-semibold"
      iconStyle={{
        backgroundColor: "#f53d7a", // icon background
        color: "#fff", // icon color (white)
        border: "3px solid blue", // border around icon
        boxShadow: "0 0 12px rgba(0,0,0,0.1)", 
      }}
      icon={<FaGraduationCap />}
    >
      {/* Institution Name */}
      <h3 className="text-xl font-bold text-slate-900 mb-1">
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          {education.name}
        </span>
      </h3>

      {/* Subject + Result */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-md font-semibold text-indigo-700">
          {education.subject}
        </span>
        <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
          {education.result}
        </span>
      </div>

      {/* Location */}
      <h4 className="text-sm text-slate-600 italic mb-3">
        {education.location}
      </h4>

      {/* Summary */}
      <p className="text-sm text-slate-700 leading-relaxed">
        {education.summary}
      </p>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>

    </div>
  );
};

export default EducationTimeline;
