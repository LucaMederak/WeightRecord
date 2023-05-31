export const WHRHelper = (waist: number, hip: number) => {
  const WHR = waist / hip;
  return Math.round(WHR * 1e2) / 1e2;
};

export const WHtRHelper = (waist: number, height: number) => {
  const WHtR = (waist / height) * 100;
  return Math.round(WHtR * 1e2) / 1e2;
};
