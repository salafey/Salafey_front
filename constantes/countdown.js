export function CountDown(date) {
  const countdown = new Date(date).getTime();

  let Now = Date.now();
  let TempsEcoule = countdown - Now;

  if (TempsEcoule > 0) {
    const time = {
      day: Math.floor(TempsEcoule / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (TempsEcoule % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((TempsEcoule % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((TempsEcoule % (1000 * 60)) / 1000),
    };

    return time;
  } else {
    const time = {
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    return time;
  }
}
