import "./storyHeader.css";

const StroryHeader = () => {
  return (
    <div className="storyHeader__container d-flex align-items-center justify-content-between">
      <div className="storyHeader__left-box flex-grow-1">
        <h5>Welcome</h5>
        <h3>The Story Behind Our Gym</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. point of using
          Lorem Ipsum is
        </p>
      </div>
      <div className="storyHeader__right-box position-relative  text-center">
        <h3>Story</h3>
      </div>
    </div>
  );
};

export default StroryHeader;
