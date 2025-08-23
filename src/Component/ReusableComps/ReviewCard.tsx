import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import type { TReview } from "../../Tyeps";
import Rating from "@mui/material/Rating";

const ReviewCard = ({ review }: { review: TReview }) => {
  const { name, avatarUrl, role, text, rating } = review;
  return (
    <div className="ml-5 my-3">
      <Card sx={{maxWidth:350 }}>
        <CardHeader
          avatar={
            <Avatar  aria-label="profile">
               <img src={avatarUrl} alt="" />
            </Avatar>
          }
          title={name}
          subheader={role}
        />

        <CardContent>
          <Rating name="read-only" value={rating} readOnly />

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
