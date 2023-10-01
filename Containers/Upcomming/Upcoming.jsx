import UpcomingHeader from "@/components/UpcoingHeader/UpcomingHeader";
import UpcomingBody from "@/components/UpcomingBody/UpcomingBody";

const Upcoming = () => {
  return (
    <div className="upComing" id="upcomming">
      <div className="container py-5">
        <UpcomingHeader
          upperTitle="OUR FITNESS TRAINING"
          mainTitle="Upcoming Classes"
          strokeTitle="Classes"
        />
        <UpcomingBody />
      </div>
    </div>
  );
};

export default Upcoming;
