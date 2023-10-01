import "./upcomingBody.css";
import Image1 from "@/public/Assets/photo.svg";
import Image2 from "@/public/Assets/photo2.svg";
import Image3 from "@/public/Assets/photo3.svg";

import UpcomingCard from "../upComingCard/UpcomingCard";

const UpcomingBody = () => {
  return (
    <div className="upcoming__body-cards__container">
      <div className="row g-4">
        <UpcomingCard
          image={Image2}
          title="Aerobic Training"
          para="containing Lorem Ipsum passagesand more recently with "
        />
        <UpcomingCard
          image={Image3}
          title="Pilates Training"
          para="containing Lorem Ipsum passagesand more recently with "
        />
        <UpcomingCard
          image={Image2}
          title="CrossFit Workout"
          para="containing Lorem Ipsum passagesand more recently with "
        />
      </div>
    </div>
  );
};

export default UpcomingBody;
