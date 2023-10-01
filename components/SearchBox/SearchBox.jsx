"use client";
import { useState } from "react";
import BodyParts from "../BodyParts/BodyParts";
import ShowingResults from "../ShowingResults/ShowingResults";

const SearchBox = ({ allBodyParts, spcifiedList }) => {
  const [search, setSearch] = useState("");
  const [exercisesList, setExercisesList] = useState([]);

  async function getByBodyPart(bodyPart) {
    const request = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=20`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );
    const res = await request.json();
    setExercisesList(res);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchedExercises = await spcifiedList(search);
    setExercisesList(searchedExercises);
  };

  return (
    <>
      <div className=" w-75 m-auto mb-5">
        <form
          className="d-flex align-items-center justify-content-between gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search Exercises"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className=" fitness_bg-green btn text-black" type="submit">
            Search
          </button>
        </form>
      </div>
      <BodyParts data={allBodyParts} getByBodyPart={getByBodyPart} />
      <ShowingResults data={exercisesList} />
    </>
  );
};

export default SearchBox;
