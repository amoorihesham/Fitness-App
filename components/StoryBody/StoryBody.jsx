import Image from "next/image";
import ImageStory from "@/public/Assets/story2.svg";
import "./storyBody.css";

const StoryBody = () => {
  return (
    <div className=" mt-3">
      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <div className="box">
            <h3>Story</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
            <Image
              src={ImageStory}
              alt="story Image"
              width={400}
              height={200}
              className="w-100"
            />
          </div>
        </div>
        <div className=" col-md-6">
          <div className="box fitness_bg-green mb-3">
            <h3>Our Value</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
          </div>
          <div className="box fitness_bg-green">
            <h3>Our Value</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryBody;
