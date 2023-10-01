"use client";
import rightArrow from "@/public/Assets/right-arrow.png";
import leftArrow from "@/public/Assets/left-arrow.png";
import Image from "next/image";
import "./showingResults.css";
import Link from "next/link";
import {
  sliceStartAtom,
  sliceEndAtom,
  currentPageAtom,
} from "../../Storage/atoms";
import { useAtom } from "jotai";

const ShowingResults = ({ data }) => {
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 8);
    setCurrentSliceEnd(currentSliceEnd + 8);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 8);
    setCurrentSliceEnd(currentSliceEnd - 8);
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="mt-5 resultsBox">
      <h3 className="text-white">Results:</h3>
      <div className="results mt-4">
        {data?.slice(currentSliceStart, currentSliceEnd).map((exercise) => (
          <Link href={`exercise/${exercise.id}`} key={exercise.id}>
            <div className="box__Results p-3 text-white">
              <Image
                src={exercise.gifUrl}
                alt="Steps Parts"
                width={300}
                height={200}
                className="w-100"
                loading="lazy"
              />
              <h5 className="results__name-exe">
                Name: {exercise.name.split(" ").slice(0, 2).join(" ")}
              </h5>
              <p>Equipment: {exercise.equipment}</p>
              <p>
                Target:
                <span className=" d-inline-block p-1 fitness_bg-green rounded text-black">
                  {exercise.target}
                </span>
              </p>
              <p>Body Part: {exercise.bodyPart}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination d-flex align-items-center justify-content-center mt-3 gap-4">
        <Image
          src={leftArrow}
          className="curosor-pointer"
          alt="arrow icon"
          width={50}
          height={50}
          onClick={previousPage}
        />

        <Image
          src={rightArrow}
          className="curosor-pointer"
          alt="arrow icon"
          width={50}
          height={50}
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default ShowingResults;
