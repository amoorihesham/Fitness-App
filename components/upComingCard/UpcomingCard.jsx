import "./upComingCard.css";
import Image from "next/image";
import Link from "next/link";

const UpcomingCard = ({ image, title, para }) => {
  return (
    <div className="col-md-6 col-xl-4 col-xxl-4">
      <div className="card__box bg-body-tertiary">
        <Image
          src={image}
          alt="Personal Thumbnail"
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
          className="w-100"
        />
        <div className="info bg-white p-3">
          <h4>{title}</h4>
          <p>{para}</p>
          <Link href={"#"}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
