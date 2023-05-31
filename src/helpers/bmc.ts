export const BMCHelper = (
  height: number,
  weight: number,
  gender: "male" | "female"
) => {
  if (gender === "male") {
    const BMC = 1.1 * weight - 128 * ((weight / height) ^ 2);
    return Math.round(BMC * 1e2) / 1e2;
  } else if (gender === "female") {
    const BMC = 1.07 * weight - 148 * ((weight / height) ^ 2);
    return Math.round(BMC * 1e2) / 1e2;
  }

  return 0;
};
