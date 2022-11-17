import { clases } from "./classes/index.js";
import { herencia } from "./inheritance/index.js";
import { interfaces } from "./interfaces/index.js";
// import { ioc1, ioc2 } from './ioc';

export const Menu = [
  {
    name: "Clases",
    method: clases,
  },
  {
    name: "Herencia",
    method: herencia,
  },
  {
    name: "Interfaz",
    method: interfaces,
  },
  // {
  //   name: 'IOC 1',
  //   method: ioc1
  // }, {
  //   name: 'IOC 2',
  //   method: ioc2
  // }
];
