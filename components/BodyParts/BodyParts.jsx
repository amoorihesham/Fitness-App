"use client";
import "./ExercisesData.css";
import bodyPar from "@/public/Assets/body-part.png";
import Image from "next/image";

const BodyParts = ({ data, getByBodyPart }) => {
  return (
    <div className="row g-3 row__bodyParts-horizontal py-2">
      {data?.map((cate) => (
        <div className="col-md-3 col-xxl-2 m-0" key={cate}>
          <div
            className="Exe-Box text-white text-center p-2"
            onClick={() => {
              getByBodyPart(cate);
            }}
          >
            <Image
              src={bodyPar}
              alt="Steps"
              style={{ width: "auto", height: "auto" }}
              loading="lazy"
            />
            <h4 className=" mt-2 mb-0">{cate} </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodyParts;
