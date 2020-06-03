const showHelp = () => {
  const helpText = `
      How to use this program:
      1. Insert the location of your file with extension, for example "/home/bido/file.txt"
      2. Your compressed file will be located at /home/bido/file.txt.gz
      `;
  console.log(helpText);
};

module.exports = showHelp;
