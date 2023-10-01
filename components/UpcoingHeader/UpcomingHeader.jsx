import "./upcoming.css";

const UpcomingHeader = ({upperTitle,mainTitle,strokeTitle}) => {
  return (
    <div className="upcoming__container">
      <div className="upcoming__left-box flex-grow-1">
        <h5>{upperTitle}</h5>
        <h3>{mainTitle}</h3>
      </div>
      <div className="upcoming__right-box position-relative overflow-hidden">
        <h3>{strokeTitle}</h3>
        <button>Get More</button>
      </div>
    </div>
  );
};

export default UpcomingHeader;
