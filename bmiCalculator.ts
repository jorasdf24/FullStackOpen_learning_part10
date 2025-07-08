import { parseArguments } from "./utils";

const calculateBmi = (height: number, weight: number): string => {
  const bmiValue = weight / (height * height);
  switch (true) {
    case bmiValue < 18.5:
      return "Underweight";
    case bmiValue >= 18.5 && bmiValue < 25:
      return "Normal weight";
    case bmiValue >= 25 && bmiValue < 30:
      return "Overweight";
    default:
      return "Obese";
  }
};

const parsed = parseArguments(process.argv);

if (parsed.length === 2) {
  console.log(calculateBmi(parsed[0], parsed[1])); // Normal weight
}else{
  console.log("Wrong number of arguments");
  
}
// Example usage:

//console.log(calculateBmi(1.8, 95)); // Overweight
