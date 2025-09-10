import Lottie from "lottie-react";
import contact from "../../assets/Lotties/contact.json";
import HeaderTitle from "./HeaderTitle";
import Container from "./Container";
import "aos/dist/aos.css";
import EmailForm from "./EmailForm";
const EmailSection = () => {
  return (
    <Container>
      <div className="my-10">
        <div>
          <HeaderTitle
            title="Get in Touch"
            subTitle="Have a question or idea? Drop me an email and I’ll get back to you soon."
          />
        </div>
        <div data-aos="zoom-in">
          <div  className="grid md:grid-cols-2 gap-10 md:p-8 p-1">
            <div className="flex justify-center items-center">
              <Lottie animationData={contact} loop={true} />
            </div>

           <div>
            <EmailForm/>
           </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EmailSection;
