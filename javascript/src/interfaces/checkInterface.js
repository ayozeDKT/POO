export const checkInterface = (fakeInterface, instance) => {
  Object.entries(fakeInterface).forEach(([key, checker]) => {
    if (!checker(instance[key])) {
      throw new Error(`${key} hast not the correct value `);
    }
  });
};
