import { parseArguments } from "./utils";

interface excerciseData {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  exerciseHours: Array<number>,
  targetHours: number
): excerciseData => {
  const sumHours = exerciseHours.reduce((acc, num) => acc + num, 0);
  let targetReached = false;
  let ratingDescription = "";
  let ratingNumber = 0;

  console.log(sumHours);

  sumHours >= targetHours ? (targetReached = true) : (targetReached = false);

  switch (true) {
    case sumHours > targetHours:
      ratingDescription = "You made more than yor goal, you are a beast!";
      ratingNumber = 6;
      break;
    case sumHours < targetHours && sumHours != 0:
      ratingDescription = "You should try harder next time, but well done!";
      ratingNumber = 3;
      break;
    case targetReached:
      ratingDescription = "You reached your goal, well done!";
      ratingNumber = 5;
      break;
    case sumHours <= 0:
      ratingDescription = "You didn't even try...";
      ratingNumber = 0;
      break;
    default:
      break;
  }

  return {
    periodLength: exerciseHours.length,
    trainingDays:
      exerciseHours.length - exerciseHours.filter((num) => num === 0).length,
    success: targetReached,
    rating: ratingNumber,
    ratingDescription: ratingDescription,
    target: targetHours,
    average: sumHours / exerciseHours.length,
  };
};

const parsed = parseArguments(process.argv);

if (parsed.length === 8) {
  const target = parsed[7];
  const dailyHours = parsed.slice(0, 7);
  console.log(calculateExercises(dailyHours, target));
} else {
  console.log("Wrong number of arguments");
}
//const result = calculateExercises([0, 1, 0, 0, 0, 0, 0], 2);
