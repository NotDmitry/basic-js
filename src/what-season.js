const {NotImplementedError} = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  try {
    date.getTime();
  } catch {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  // Dec = 0, Jan = 1, Feb = 2, ... Nov = 11
  const month = (date.getMonth() + 1) % 12;
  return seasons[Math.floor(month / 3)];
}

module.exports = {
  getSeason
};
