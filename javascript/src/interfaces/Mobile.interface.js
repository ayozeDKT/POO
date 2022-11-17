export const PhoneColors = Object.freeze({
  black: "black",
  white: "white",
  green: "green",
  blue: "blue",
});

export const MobileI = Object.freeze({
  phoneNumber: (param) =>
    typeof param === "string" || typeof param === "undefined",
  battery: (param) => typeof param === "number" || typeof param === "undefined",
  color: (param) => PhoneColors[param] !== undefined,
  useCalculator: (param) => typeof param === "function",
});
