module.exports = function getSeason(date) {
  if (!date instanceof Date || date === undefined) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error();
  let s = date.getMonth();
  if(s == 11|| s == 0|| s == 1) return 'winter';
  if(s == 2|| s == 3|| s == 4) return 'spring';
  if(s == 5|| s == 6|| s == 7) return 'summer';
  if(s == 8|| s == 9|| s == 10) return 'autumn';
};
