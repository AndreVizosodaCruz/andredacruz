export const getYearsFromFebruary2017 = () => {
  const start = new Date(2017, 1, 1);
  const now = new Date();
  return now.getFullYear() - start.getFullYear();
};