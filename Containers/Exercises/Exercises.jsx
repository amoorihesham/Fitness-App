import SearchBox from "@/components/SearchBox/SearchBox";

async function getAllCategories() {
  const request = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    }
  );
  return request.json();
}
async function getSearchedData(word) {
  "use server";
  const request = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises?limit=1000`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    }
  );
  const res = await request.json();
  const filterd = await res.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(word.toLowerCase()) ||
      exercise.target.toLowerCase().includes(word.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(word.toLowerCase()) ||
      exercise.equipment.toLowerCase().includes(word.toLowerCase())
  );

  return filterd;
}

const Exercises = async () => {
  const allBodyParts = await getAllCategories();

  return (
    <div className="Exersices fitness_bg-dark py-5" id="exercises">
      <div className="container">
        <SearchBox allBodyParts={allBodyParts} spcifiedList={getSearchedData} />
      </div>
    </div>
  );
};

export default Exercises;
