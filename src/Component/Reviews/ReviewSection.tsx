import Marquee from "react-fast-marquee";
import Container from "../ReusableComps/Container";
import HeaderTitle from "../ReusableComps/HeaderTitle";
import { reviews } from "../../Data/reviews";
import ReviewCard from "../ReusableComps/ReviewCard";

const ReviewSection = () => {
  return (
    <Container>
      <div>
        <HeaderTitle
          title="Reviews & Recommendations"
          subTitle="Real experiences and endorsements that showcase my commitment to excellence."
        />
      </div>

      <Marquee>
        <div className="flex items-center ">
          {reviews?.map((review) => (
            <ReviewCard review={review} key={review._id} />
          ))}
        </div>
      </Marquee>
    </Container>
  );
};

export default ReviewSection;
