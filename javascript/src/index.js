import readline from "readline";
import { Menu } from "./Menu.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const keyboardRead = (title) =>
  new Promise((resolve) => {
    rl.question(`${title}\n`, (value) => {
      resolve(Number(value));
    });
  });

const chooseMethod = (index) => {
  const method = Menu[index - 1];
  if (!method) {
    console.log("Opción inexistente");
    return () => {};
  }
  return method.method;
};

const Main = async () => {
  let exit = false;
  while (!exit) {
    console.log("\n\n------Menu------");
    Menu.forEach((item, index) => console.log(`${index + 1}. ${item.name}`));
    console.log("0. Exit");
    const selectedOption = await keyboardRead(
      "Selecciona tu opción (solo el número)"
    );
    exit = selectedOption === 0;
    if (!exit) {
      chooseMethod(selectedOption)();
    }
  }
  console.log("Saliendo");
  rl.close();
};

Main();
