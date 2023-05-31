export const bmiHelper = (weight: number, height: number) => {
  const bmi = Math.round((weight / (height / 100) ** 2) * 1e2) / 1e2;
  return bmi;
};
