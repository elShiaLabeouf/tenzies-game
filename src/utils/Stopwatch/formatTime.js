/**
 * Formats a time value in milliseconds into sexagesimal (counting in 60s) minutes and seconds
 * @param {number} time - Time in milliseconds to format
 * @returns {string} time in a format of HH:MM:SS, i.e. "01:00:40", "00:02:34"
 */
export function timeToDisplay(time) {
  const hours = Math.floor(time / 3600000)
  const minutes = Math.floor((time % 3600000) / 60000)
  const seconds = Math.floor((time % 60000) / 1000)

  const hoursStr = hours === 0 ? "" : `${hours.toString().padStart(2, '0')}:`

  return `${hoursStr}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}