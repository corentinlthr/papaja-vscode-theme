import papajaDark from "./themes/papaja-dark.js";
// import scheme2023Light from "./2023-light.js";
import papajaBlue from "./papaja-blue.js";
import template from "./lib/template.js";
import fs from "fs";

let file = null;

// file = JSON.stringify(template(papajaBlue), null, 4);
// fs.writeFileSync("themes/Papaja-Blue.json", file);

file = JSON.stringify(template(papajaDark), null, 4);
fs.writeFileSync("build/papaja-dark.json", file);

// file = JSON.stringify(template(scheme2023Light), null, 4);
// fs.writeFileSync("themes/2023-light.json", file);
