module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){ 
    return false;
  }
  let mas = [];
    members.forEach(item => {
        if(typeof item == 'string'){

            mas.push(item.trim()[0].toUpperCase());
        }
  });
  if(mas.length === 0){
    return false;
  }
  else{
    return mas.sort().join("");
  }
};