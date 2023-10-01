import Image from "next/image";
import "./page.css";

const page = async ({ params }) => {
  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  async function getOnlyExercise() {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.exerciseId}`,
      options
    );
    if (!response.ok) {
      throw new Error("Faild To fetch");
    }
    return response.json();
  }

  const ExerciseData = await getOnlyExercise();
  return (
    <div className="Exercise__Info py-5 bg-body-tertiary">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-5">
            <Image
              src={ExerciseData.gifUrl}
              alt="Steps Image"
              width={800}
              height={640}
              className="w-100"
            />
          </div>
          <div className="col-md-7">
            <div className="exercise__info-box bg-white p-3">
              <h4 className="exercise__heading">
                Exercise Name: <span>{ExerciseData.name}</span>
              </h4>
              <h4 className="exercise__heading">
                Body Part: <span>{ExerciseData.bodyPart}</span>
              </h4>
              <h4 className="exercise__heading">
                Equipment: <span>{ExerciseData.equipment}</span>
              </h4>
              <h4 className="exercise__heading">
                Target Muscle: <span>{ExerciseData.target}</span>
              </h4>
              <div className="related__muscles">
                <span>Related Muscles:</span>
                <ul>
                  {ExerciseData.secondaryMuscles.map((muscle) => (
                    <li key={muscle}>{muscle}</li>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <ul>
                  {ExerciseData.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
