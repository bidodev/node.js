const args = process.argv.slice(2);
const stars = args[0];
const header = args[1];

(genOutput = (stars = 10, header = "Hey") => {
  console.log(`${"*".repeat(stars)}\n${header}\n${"*".repeat(stars)}`);
})(stars, header);

//args always will be an array..
