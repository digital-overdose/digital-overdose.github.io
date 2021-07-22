export function diff(epochDiff: number): number[] {
  const seconds: number = Math.floor(epochDiff / 1000);
  const realSeconds = seconds % 60;

  const minutes = Math.floor((seconds - realSeconds) / 60);
  const realMinutes = minutes % 60;

  const hours = Math.floor((minutes - realMinutes) / 60);
  const realHours = hours % 24;

  const days = Math.floor((hours - realHours) / 24);

  return [days, realHours, realMinutes, realSeconds];
}
