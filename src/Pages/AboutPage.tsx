import Container from "../Component/ReusableComps/Container";
import EducationTimeline from "../Component/ReusableComps/EducationTimeline";


const AboutPage = () => {
 
 
  return (
    <Container>
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6 text-center">
        Hi, I’m <span className="font-semibold text-primary">Amir Hamza Ismail</span>, a passionate Full Stack Web Developer from Bangladesh with a focus on building user-friendly and performance-driven web applications. I love turning complex problems into elegant, scalable solutions.
      </p>

      {/* Education & Background */}
      <div className="mb-6">
      <EducationTimeline/>
      </div>

      {/* Skills Summary */}
    

      {/* Experience */}
 

      {/* Mission or Goal */}
   

      {/* Fun Facts / Hobbies */}
     
    </Container>
  );
};



export default AboutPage