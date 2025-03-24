export function formatTime(time) {
  return {
    hours: Math.floor(time / 3600000),
    minutesRemainder: Math.floor((time % 3600000) / 60000),
    secondsRemainder: Math.floor((time % 60000) / 1000),
    minutes: Math.floor(time / 60000),
    seconds: Math.floor(time / 1000)
  }
}
