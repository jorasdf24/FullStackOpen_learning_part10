export const parseArguments = (args: string[]): Array<number> => {
  if (args.length < 3) {
    throw new Error("Not enough arguments");
  }

  const parsedArgs: Array<number> = args.slice(2).map((arg) => {
    const num = Number(arg);
    if (isNaN(num)) {
      throw new Error(`Provided value '${arg}' is not a number!`);
    }
    return num;
  });

  return parsedArgs;
};

