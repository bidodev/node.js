const args = process.argv.slice(2);

(genOutput = args => {
  const star = "*";

  if (!args.length) {
    args = [10, "Hey"];
  }

  console.log(`${star.repeat(args[0])}\n${args[1]}\n${star.repeat(args[0])}`);
})(args);

//args always will be an array..
