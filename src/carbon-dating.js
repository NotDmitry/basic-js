const {NotImplementedError} = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  /*
   1) t(1/2) = ln2 / k; k = ln2 / t(1/2)
   2) -kt = ln(N / N0);
   3) t = ln(N0 / N) / k
   4) N0 / N = A0 / A
  */
  if (typeof sampleActivity !== 'string') return false;
  if (!isFinite(+sampleActivity)) return false;
  if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const ratio = MODERN_ACTIVITY / sampleActivity;
  return Math.ceil(Math.log(ratio) / k);
}

module.exports = {
  dateSample
};
