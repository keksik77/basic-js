module.exports = function countCats(matrix) {
  let number = 0;
  matrix.forEach(string => {
    string.forEach(item =>{
      if(item === "^^")
      {
        number++;
      }
    })
  });
  return number;
};
